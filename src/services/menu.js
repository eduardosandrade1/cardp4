import { http } from "./config";

export default {

    save: (items, id) => {
        let params = {
            items: items,
            ID: id
        }
        return http.post('menu', params)
    },

    get: (id) => {
        return http.get(`menu/${id}`)
    }


}