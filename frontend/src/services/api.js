import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:3001'
});

export const apiAxios = ({ method, route, ...rest }) => axios({
  method,
  url: `http://localhost:3001/${route}`,
  ...rest
});

/* const api2 = {
  deleteEmployee: async () => axios
    .delete(`${baseURL}${DELETE}`)
    .then((result) => result.data.response),
}; */

export default api;
