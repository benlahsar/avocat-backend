import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function getCsrfToken() {
  await api.get("/sanctum/csrf-cookie");
}

export default api;
