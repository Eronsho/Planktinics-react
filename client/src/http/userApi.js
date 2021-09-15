import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";
export const registration = async (email, password, name) => {
  const { data } = await $host.post("api/user/reqistration", {
    email,
    password,
    role: "ADMIN",
    name,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const chek = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
