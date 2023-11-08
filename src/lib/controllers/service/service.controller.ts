import $api from "lib/http";
import axios from "axios";
import RateDto from "./dto/rate.dto";



export class ServiceController{
    static async rate({service_id, token, feedback, rating}: RateDto) {
        try{
            const response = await $api.post('api/service/rate',{
                service_id, token, rating
            })
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