import { Api } from "../../../axios/api";

export const getAllUsers = async () => {
    try {
        const data = await Api.get("/api/db/users")
        return data.data
    }
    catch (err) {
        console.log(err);
    }
}
