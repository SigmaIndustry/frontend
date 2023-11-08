import $api, {API_URL} from "../../http";
import SignInDto from "./dto/sign-in.dto";
import axios, {AxiosError} from "axios";
import SignUpDto from "./dto/sign-up.dto";

export class AuthController {
    static async signIn({email, password}: SignInDto) {
        try {
            const response = await $api.post('security/login',{
                email,
                password,
            });

            return response.data;
        } catch (e) {
            console.log(e);
            if (axios.isAxiosError(e)) {
                return {
                    error: e?.response?.data?.error ?? 'Internal server error. Try again!',
                }
            } else {
                return e;
            }
        }
    }
    static async signUp(signUpDto: SignUpDto) {
        try {
            const response = await $api.post('security/register', signUpDto);
            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
            if (axios.isAxiosError(e)) {
                return {
                    error: e?.response?.data?.invalid_fields ?? 'Internal server error. Try again!',
                }
            } else {
                return e;
            }
        }
    }
    static async logout() {
        window.localStorage.removeItem('token');
    }

    static async verify(token: string) {
        try {
            const signInResponse = await $api.post('security/authenticate', {
                token
            });
            if (signInResponse.data.error) {
                return {
                    error: signInResponse.data.error
                };
            } else {
                return signInResponse.data;
            }
        } catch (e: any) {
            console.log(e);
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }
}