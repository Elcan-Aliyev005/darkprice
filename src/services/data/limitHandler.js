import { Api } from "../../axios/api"

export const limitHandler = async (productId, limit, retail_price, old_price, storeId,name) => {
    try {
        Api.put(`/api/db/change-limit/${productId}`, {
            productId,
            limit,
            retail_price,
            old_price,
            storeId,
            name
        })
    }
    catch (err) {
        console.log(err);

    }
}