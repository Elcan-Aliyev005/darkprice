import { Api } from "../../../axios/api";

export const getAllStore = async () => {
    try {
        const data = await Api.get("/api/db/stores")
        return data.data
    }
    catch (err) {
        console.log(err);
    }
}
