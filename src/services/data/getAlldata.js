import { Api } from "../../axios/api"

const getAllData = async (page, storeId) => {
    const data = await Api.post("/api/products/all", {
        page,
        storeId
    })
    return data.data
}

export { getAllData }