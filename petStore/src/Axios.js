import { baseUrl } from "./Constans";
import axios from "axios";

export const instance = axios.create({
    baseURL: baseUrl,
  });
