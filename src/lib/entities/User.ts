export interface User {
    "email": string,
    "first_name": string,
    "last_name": string,
    "birth_date": string, // yyyy-mm-dd
    "sex": string,
    "profile_picture": string
}

export interface ServiceProvider {
    "business_name": string,
    "description": string,
    "phone_number": string,
    "city": string,
    "work_time": string, //hh:mm-hh:mm
    "created_at": string // date.toUTCString
}