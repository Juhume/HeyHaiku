import axios from 'axios';

class HaikuService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/haikus`,
      withCredentials: true
    });
  }

  add = (name, line1, line2, line3) => {
    return this.service.post('/add', {name, line1, line2, line3})
    .then(response => response.data)
  }

  getAll = () => {
    console.log("hola")
    return this.service.get('/all/Haikus')
    .then(response => response.data)
    .catch(err => console.log(err))
  }
}

export default HaikuService;