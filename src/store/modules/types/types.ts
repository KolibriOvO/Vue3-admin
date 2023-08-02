//定义小仓库数据states类型
import {RouteRecordRaw} from "vue-router";

export interface userState{
  token:string|null,
  menuRoutes:RouteRecordRaw[]
}