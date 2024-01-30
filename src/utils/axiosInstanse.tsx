import axios from "axios";
import { mainUrl } from "./urls";

const axiosInstanse = axios.create({
  baseURL: mainUrl,
});

export default axiosInstanse;
