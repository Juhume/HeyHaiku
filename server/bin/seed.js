require("dotenv").config();
const mongoose = require("mongoose");
const Haiku = require("../models/Haiku");
const { DBURL } = process.env;
console.log(DBURL);
mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
const haikus = [
  {
    name: "Under the sea",
    line1: "Salt water splashing",
    line2: "Sea creatures play hide-and-seek",
    line3: "In the deep blue sea",
    creatorId: "5d9f64fc702a28669539d99f"
  },
  {
    name: "The basics",
    line1: "I am first with five",
    line2: "Then seven in the middle",
    line3: "Five again to end",
    creatorId: "5d9f64fc702a28669539d99f"
  },
  {
    name: "A guess",
    line1: "In a pouch I grow",
    line2: "On a southern continent",
    line3: "Strange creatures I know",
    creatorId: "5d9f64fc702a28669539d99f"
  },

];
  Haiku.deleteMany()
  .then(() => {
    return Haiku.create(haikus).then(haikusCreated => {
      console.log(
        `${haikusCreated.length} users created with the following id:`
      );
      console.log(haikusCreated.map(u => u._id));
    });
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });