// 与用户相关的，用户登录相关的请求接口都写在这

import { post, get } from "../utils/http/request";

interface LoginData {
  username: string;
  password: string;
}
// 封装一个登录功能的函数
export function login(data: LoginData) {
  return post("/login", data);
}

// 封装一个获取菜单的函数
export function getMenu() {
  return get("/menu");
}
