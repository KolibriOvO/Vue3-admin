import {defineStore} from "pinia";
import {reqLogin} from "@/api/user";
import type {loginForm, loginResponseData} from "@/api/user/type.ts";
import type {userState} from "@/store/modules/types/types.ts";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";
import {constantRoute} from "@/router/routes.ts";

let useUserStore = defineStore('User', {
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data);
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  },
  getters: {}
})

export default useUserStore