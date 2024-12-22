import { BaseUrl } from "./baseUrl";
import { commonApi } from "./commonApi";



// add food 

export const addFoodApi=async(bodyData,headers)=>{
    return await commonApi('post',`${BaseUrl}/api/food/add`,bodyData,headers)
}

// foodList api 


export const foodListApi=async()=>{

   return await commonApi('get',`${BaseUrl}/api/food/list`,{},{})

}

// removeFoodApi 

export const removeFoodApi=async(bodyData)=>{
    return await commonApi('post',`${BaseUrl}/api/food/remove`,bodyData,{})
}