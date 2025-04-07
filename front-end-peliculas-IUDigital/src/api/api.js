import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:5000', 
  baseURL: 'https://api-peliculas-jcrs.onrender.com',
});

export default api;
