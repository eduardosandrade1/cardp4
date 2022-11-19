import { http } from "./config";

export default {

    save: (params) => {
        return http.post('menu', params)
    }


}