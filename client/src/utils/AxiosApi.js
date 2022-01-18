import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

export default axiosApi;

/* process.env.REACT_APP_APIURL // "http://localhost:5000" */