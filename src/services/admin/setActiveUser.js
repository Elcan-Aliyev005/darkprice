import { Api } from "../../axios/api"

export const setActiveUser = async (id, isActive) => {
    try {
        const data = await Api.put('/api/db/set-active',{
            id,
            isActive
        })
        console.log(data);
        
    }
    catch (err) {
        console.log(err);
    }
}