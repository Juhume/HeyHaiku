const router = require('express').Router();
const Haiku = require('../models/Haiku');
const axios = require('axios');


router.route('/').get((req, res) => {
  Haiku.find()
    .then(haikus => res.json(haikus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res, next) => {
  const name = req.body.name;
  const line1 = req.body.line1;
  const line2 = req.body.line2;
  const line3 = req.body.line3;
  const creatorId = req.user._id;

  const newHaiku = new Haiku({
    name,
    line1,
    line2,
    line3,
    creatorId
  });

  newHaiku.save()
  .then((haiku) => res.json({haiku}))   
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Haiku.findById(req.params.id)
    .then(haiku => res.json(haiku))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Haiku.findByIdAndDelete(req.params.id)
    .then(() => res.json('Haiku deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Haiku.findById(req.params.id)
    .then(haiku => {
      haiku.name = req.body.name;
      haiku.line1 = req.body.line1;
      haiku.line2 = req.body.line2;
      haiku.line3 = req.body.line3;

      haiku.save()
        .then((haiku) => res.json({haiku}))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/all/Haikus', (req, res, next) => {
  Haiku
  .find()
  .populate("creatorId")
  .then(haikus => res.json({haikus}))
  .catch(err => console.log(err))
})

router.get('/all/myhaikus/:username', (req,res,next) => {
  Haiku
  .find({creatorId:req.params.username})
  .then(haikus => res.status(200).json({haikus}))
  .catch(err => console.log(err))
})

router.get("/randompoem/poem", (req, res, next) => {
  axios.get("https://www.poemist.com/api/v1/randompoems")
  // .then((resp) => res.status(200).json({resp}))
  .then((resp) => { newPoem={title:resp.data[0].title , content:resp.data[0].content , name: resp.data[0].poet.name, url: resp.data[0].poet.url } 
  res.status(200).json({newPoem})
  })
  .catch(error => console.log(error))
})

router.get("/deletehaiku/:id", (req, res, next) => {
  // console.log(req.params.id)
  Haiku
  .findByIdAndDelete({_id: req.params.id})
  .then(haikus => res.status(200).json({haikus}))
  .catch(err => console.log(err))
})
  
  module.exports = router;