import $api from "lib/http";
import SearchDto from "./dto/search.dto";
import axios from "axios";

export class SearchController{
    static async search({querry}:SearchDto){
        try{
            const response = await $api.post('service/search',{querry})
            return response
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