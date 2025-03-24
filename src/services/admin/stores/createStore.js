import { Api } from "../../../axios/api"

export const createStore = () => {
 
    Api.post('/api/db/store')
}