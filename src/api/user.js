import request from "@/api/request";

export function login(mail,password,captcha){
    return request({
        url: 'user/login',
        method: 'post',
        data: {
            mail,
            password,
            captcha
        }
    })
}
export function register(email,password,code){
    return request({
        url: 'user/register',
        method: 'post',
        data: {
            email,
            password,
            code
        },
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}