import $api from "lib/http";
import axios from "axios";
import ProviderDto from "./dto/provider.dto";



export class Provider{
    static async get_provider({id}:ProviderDto){
        try{
            const response = await $api.post('api/secuirity/get_provider',{id})
            return response;
        } catch (e){
            console.log(e)
            if (axios.isAxiosError(e)) {
                return {
                    error: e?.response?.data?.error ?? 'Internal server error. Try again!',
                }
            } else {
                return e;
            }
        }
    }
}