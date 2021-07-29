import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:3001'
});

/* export const apiAxios = ({ method, route, ...rest }) => axios({
  method,
  url: `http://localhost:3001/${route}`,
  ...rest
}); */

export default api;
