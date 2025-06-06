import request from "@/api/request";

export function getCaptcha()
{
    return request({
        url: `api/captcha?t=${Date.now()}`,
        method: 'get',
        responseType: 'blob'
    })
}
export function getMailCaptcha(email){
    return request({
        url: 'api/mail/captcha',
        method: 'post',
        params: {
            email
        }
    })
}

