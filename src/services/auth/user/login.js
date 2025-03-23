import { Api } from "../../../axios/api"

export const login = async(credential, password) => {
    try{
        const response = await Api.post("/api/auth/login", {
            credential,
            password
        })
        return response.data
        
    }catch(e){
        console.log(e);
    }
}

