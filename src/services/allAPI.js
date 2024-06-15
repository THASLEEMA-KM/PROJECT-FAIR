import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

export const registerAPI = async (reqBody)=>
    {
        return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
        
    }
export const loginAPI = async(reqBody)=>
    {
        return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
    }

export const addProjectAPI = async(reqBody,reqHeader)=>
    {
        return await commonAPI("POST",`${SERVER_URL}/project/add`,reqBody,reqHeader)
    }

// home projects
export const homeProjectAPI = async()=>
    {
        return await commonAPI("GET",`${SERVER_URL}/get-home-projects`,"")
    }

// all projects
export const allProjectAPI = async(reqHeader)=>
    {
        return await commonAPI("GET",`${SERVER_URL}/all-projects`,"",reqHeader)
    }

// user projects
export const userProjectAPI = async(reqHeader)=>
    {
        return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
    }