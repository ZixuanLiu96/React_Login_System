import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { message } from "antd";

// axios实例类型
const http: AxiosInstance = axios.create({
  baseURL: "http://www.demo.com", // 网址一样的公共部分可以放在这里，之后发送请求的时候，可以只写后面的部分
  timeout: 5000, // 请求的时间，如果请求超过5秒还没成功，就停止继续发送请求
});

// 请求拦截器:发请求的时候需要做一些统一的处理
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // console.log("config", config);
  // 在请求拦截器中加上token，因为之后每次发送请求都要用token

  return config; //必须要返回发送的请求
});

// 响应拦截器：在请求的数据返回之前，响应拦截器会拦截下来，对数据进行统一的处理
http.interceptors.response.use((response: AxiosResponse) => {
  // console.log("response", response);
  // 在拦截器中统一判断返回的数据是否成功，如果code不等于200，那么就会弹出错误的提示框
  console.log("response", response);
  if (response.data.code !== 200) {
    message.error(`${response.data.code}:${response.data.message}`);
    return Promise.reject(new Error(response.data.message));
  }
  return response.data; // 必须要返回请求回来的结果
});

export default http;
