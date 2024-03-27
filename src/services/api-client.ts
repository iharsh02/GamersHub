import axios from "axios";

// const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});
