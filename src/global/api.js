import axios from "axios";
const API_URL_DEV = process.env.BANK_SAMPAH_API_DEV || 'https://api-demo.mctechnologyofficial.com/api'

export const authentication = async (payload) => {
    let result = await axios.post(`${API_URL_DEV}/auth/v1/login`, payload)
    
    return result.data
}