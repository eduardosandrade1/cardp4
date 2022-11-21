import { http } from "./config";

export default {

    save: (items, id) => {
        let params = {
            items: items,
            ID: id
        }
        return http.post('menu', params)
    },

    get: (id, headers = {}) => {
        return http.get(`menu/${id}`, {headers: headers})
    },

    getToView: (id) => {
        return http.get(`view/menu/${id}`);
    }


}