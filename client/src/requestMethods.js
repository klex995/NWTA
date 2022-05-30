import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2UyN2M1MWY1NGVjNzNkMDI1YzZiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzkzNjMzNywiZXhwIjoxNjU0MTk1NTM3fQ.ddXXR5tPvx44MpwXZxX7-gl0XmXi3RsuaFUTz5fbjKM";

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});
