import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { mainStore } from '../store/index'
import {storeToRefs} from 'pinia'
const store = mainStore()
const { token } =storeToRefs(store);
// axios.defaults.baseURL = '' // 不需要添加直接封装好aixos实例
export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance: any = axios.create({
    timeout: 2500,    //超时配置
    withCredentials: true,  //跨域携带cookie
    ...config,   // 自定义配置覆盖基本配置
  });
  // instance.defaults.timeout = 2500;
  // 统一方式


  // instance.defaults.headers['Content-Type'] = `application/json`;
  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      // 在发送请求之前做些什么
      if (token.value) {
        config.headers.token = token.value;
      }
      return config;
    },
    function (error: any) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response: { data: any; }) {
      // 对响应数据做点什么
      const { data } = response;
      //   console.log("response:", response);
      return data;
    },
    function (error: { response: any; config: any; request: any; }) {
      // 对响应错误做点什么
      console.log("error-response:", error.response);
      console.log("error-config:", error.config);
      console.log("error-request:", error.request);
      return Promise.reject(error);
    }
  );
  return instance;
};
