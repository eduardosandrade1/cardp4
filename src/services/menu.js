import { http } from "./config";

export default {

    save: (items, id, headers) => {
        let params = {
            items: items,
            ID: id
        }
        return http.post('menu', params, {headers: headers})
    },

    get: (id, headers = {}) => {
        return http.get(`menu/${id}`, {headers: headers})
    },

    getToView: (id) => {
        return http.get(`view/menu/${id}`);
    }


}