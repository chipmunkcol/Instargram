import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";


const cookies = new Cookies();


export const setRefreshToken = (refreshToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('refresh_token', refreshToken, {
        sameSite: 'strict',
        path: "/",
        expires: new Date(expireDate)
    })
};

export const getCookieToken = () => {
    return cookies.get('refresh_token');
}

export const removeCookieToken = () => {
    return cookies.remove('refresh_token', { sameSite: 'strict', path: "/" })
}



/////

const cookie = new Cookies()

export const setCookie = (name: string, value: string, option?: any) => {
    return cookie.set(name, value, { ...option })
}

export const getCookie = (name: 'abcd' ) => {
    return cookie.get(name)
}


////로그인.js
const Login = () => {
    const [cookies, setCookie] = useCookies(['id']);
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
     

    const login = async () => {
        await axios.post('localhost3001/users', { id: id, pw: pw })
        .then((res) => {
            console.log(res)
            setCookie('id', res.data.token)
        })
    }



    return(
        <div>
            <input onChange={(e)=>{setId(e.target.value)}}/>
            <input onChange={(e)=>{setPw(e.target.value)}}/>
        </div>
    );
}

const LoginCheck = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    
    const authCheck = () => {
        const token = cookies.id
        axios.post('localhost3001/users', { token: token })
        .then((res) => {
            console.log(userId)
            setUserId(res.data.id)
        })
        .catch(() => {
            logOut();
        })
    }
}