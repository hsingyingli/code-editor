import axios from "axios";

const BASE_URL = 'http://localhost:9010'

export default axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})


