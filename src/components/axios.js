import axios from "axios";

const instance = axios.create({
  baseURL: "https://shortvideo-mern-solopov.herokuapp.com",
});

export default instance;