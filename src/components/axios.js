import axios from "axios";

const instance = axios.create({
  baseURL: "https://short-video-backend.onrender.com",
});

export default instance;