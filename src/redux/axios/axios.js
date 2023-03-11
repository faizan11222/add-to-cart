import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_BASE_ROOT || "http://localhost:5000";

axios.interceptors.request.use(
  function (request) {
    return request;
  },
  function (err) {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axios;
