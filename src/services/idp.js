import { http } from "./config";

export default {

    get: (params) => {
        return http.get('idp', params);
    }

}