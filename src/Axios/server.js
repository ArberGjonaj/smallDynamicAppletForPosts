import axios from "axios";

 const Axios =axios.create({
  baseURL: "localhost:5000",
  headers: { "Access-Control-Allow-Origin": "*" },
  
});
Axios.interceptors.request.use(
  function(config) {
    const token = sessionStorage.getItem("access_token"); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default Axios;
