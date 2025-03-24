import { Api } from "../../../axios/api"

export const setActiveStore = async (id, isActive) => {
    try {
        const data = await Api.put('/api/db/set-active-store',{
            id,
            isActive
        })
        console.log(data);
        
    }
    catch (err) {
        console.log(err);
    }
}