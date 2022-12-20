import { http } from "./config";

export default {

    save: (items, id, conf, headers = {}) => {
        let params = {
            items: items,
            ID: id,
            conf: conf,
        }

        return http.post('menu', params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    get: (id, headers = {}) => {
        return http.get(`menu/${id}`, {headers: headers})
    },

    getToView: (id) => {
        return http.get(`view/menu/${id}`);
    }


}