// 封装发送请求的函数（get，post函数）

import http from "../http";

interface ApiReponse {
  code: number;
  message: string;
  data: any;
}

export function get(url: string, params?: any): Promise<ApiReponse> {
  return http.get(url, { params });
}

export function post(url: string, data?: any): Promise<ApiReponse> {
  return http.post(url, data);
}
