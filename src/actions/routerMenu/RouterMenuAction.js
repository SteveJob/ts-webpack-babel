/**
 * Created by Administrator on 2017/5/19.
 */
// export const GET_ROUTER_MENU_SAGA = 'GET_ROUTERMENU';//获取路由及导航栏等信息
// export const RECEIVED_ROUTER_MENU_DATA = 'RECEIVED_ROUTER_MENU_DATA';//取得路由及导航栏等信息
// export const ROUTER_MENU_ISFINISHED = 'ROUTER_MENU_ISFINISHED';//数据获取是否完成
//
// export const getRouterMenu = (params) => {
//
//     return {
//         type: GET_ROUTER_MENU_SAGA,
//         params,
//     }
// }
//
// export const receivedRouterMenuData = (params) => {
//     return {
//         type: RECEIVED_ROUTER_MENU_DATA,
//         params,
//     }
// }
//
// export const isFinished = (params) => {
//     return {
//         type: ROUTER_MENU_ISFINISHED,
//         params,
//     }
// }
export const GET_ROUTER_MENU = 'getRouterMenu'
export const RECEIVED_ROUTER_MENU_DATA = 'receivedRouterMenuData'
export const ROUTER_MENU_RECEIVED_STATE = 'routerMenuReceivedState'

export const getRouterMenu = (payload) => {
    return {
        type: GET_ROUTER_MENU,
        payload
    }
}

export const receivedRouterMenuData = (payload) => {
    return {
        type: RECEIVED_ROUTER_MENU_DATA,
        payload
    }
}

export const routerMenuReceivedState = (payload) => {
    return {
        type: ROUTER_MENU_RECEIVED_STATE,
        payload
    }
}