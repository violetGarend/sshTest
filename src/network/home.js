//首页的网络封装
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}