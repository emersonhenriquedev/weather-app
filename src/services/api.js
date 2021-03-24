import axios from "axios";
//https://api.hgbrasil.com/weather?key=667e91c1&lat=-23.682&lon=-46.875&user_ip=remote
export const key = "566f8888";

export const api = axios.create({
  baseURL: "https://api.hgbrasil.com/weather",
});

// export default api;
