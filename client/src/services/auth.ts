import axios from '../utils/axios'

type authProps = {
    email: string,
    password: string
}

type authGoogleProps = {
    email: string,
    provider: string
}

export const authLogin = async(userData: authProps) => {
    const res = await axios.post('/auth/login', userData, 
    {
        withCredentials: true
    })
    return res
}

export const authRegister = async(userData: authProps) => {
    const res = await axios.post('/auth/register', userData, 
            {
                withCredentials: true
            })
    return res
}

export const authRegisterGoogle = async(userData: authGoogleProps) => {
    const res = await axios.post("/auth/register/google", userData)
    return res
}

export const authLoginGoogle = async(userData: authGoogleProps) => {
    const res = await axios.post("/auth/login/google", userData)
    return res
}