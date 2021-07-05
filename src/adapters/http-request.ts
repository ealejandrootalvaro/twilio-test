import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export const requestApi = axios.create({
  baseURL: process.env.SERVICES_URL
});