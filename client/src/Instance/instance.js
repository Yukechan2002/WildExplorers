import axios from "axios";
import { REACT_APP_API_URL } from "../utils/config";

const baseURL = 'https://wildlens-93c9.onrender.com/api';

const instance = axios.create({
  baseURL,
  timeout: 5000,

  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

export { instance, protectedInstance };
