import request from "@/utils/request.ts";
import type {loginForm, loginResponseData, userResponseData} from "@/api/user/type.ts";

enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info"

}

// 登录接口
export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
//获取用户信息接口
export const reqUserInfo = () => {
  return request.get<any, userResponseData>(API.USERINFO_URL)
}