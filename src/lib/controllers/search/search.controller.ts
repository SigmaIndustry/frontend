import $api from "lib/http";
import SearchDto from "./dto/search.dto";
import axios from "axios";



export class SearchController{
    static async search({query}:SearchDto){
        try{
            const response = await $api.post('api/service/search',{query})
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