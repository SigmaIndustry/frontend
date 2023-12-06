import $api from "lib/http";
import axios from "axios";
import RateDto from "./dto/rate.dto";
import OrderDto from "./dto/order.dto";
import CreateDto from "./dto/create.dto";



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
    static async order({service_id, token,  message}: OrderDto) {
        try{
            const response = await $api.post('api/service/order',{
                service_id, token, message
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

    static async create(createDto: CreateDto) {
        try{
            const response = await $api.post('api/service/create',createDto)
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