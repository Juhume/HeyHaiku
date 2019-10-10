import axios from 'axios';

class HaikuService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/haikus',
      withCredentials: true
    });
  }

  add = (name, line1, line2, line3) => {
    return this.service.post('/add', {name, line1, line2, line3})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default HaikuService;