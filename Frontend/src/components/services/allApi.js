import { BaseUrl } from "./baseUrl"
import { commonApi } from "./commonApi"





// login api 



export const loginApi=async(bodyData)=>{

    return await commonApi('post',`${BaseUrl}/api/user/login`,bodyData,{})

}


// register api 

export const registerApi=async(bodyData)=>{
    return await commonApi('post',`${BaseUrl}/api/user/register`,bodyData,{})
}


// fetch food api 


export const getFoodApi=async()=>{
    return await commonApi("get",`${BaseUrl}/api/food/list`,{},{})
}