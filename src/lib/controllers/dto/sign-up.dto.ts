import {AuthUser} from "../../../app/home/auth/AuthSection";

type SignUpDto = {
    first_name: string,
    last_name: string,
    sex: string,
    role: string,
    email: string,
    password: string,
    profile_picture: string,
    birth_date: string,
}

export default SignUpDto;
