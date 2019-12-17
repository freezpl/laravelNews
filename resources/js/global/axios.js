import axios from 'axios'

let http = axios.create({
    baseURL: 'https://localhost:3000/api/'
  });

  http.defaults.headers.common['Content-Type'] = 'application/json';
  //http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export default http;