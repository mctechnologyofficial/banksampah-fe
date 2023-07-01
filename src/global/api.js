import axios from "axios";
import axiosDev from "./axios-instance-dev";
const API_URL_DEV = process.env.BANK_SAMPAH_API_DEV || 'https://api-demo.mctechnologyofficial.com/api'

export const authentication = async (payload) => {
    let result = await axios.post(`${API_URL_DEV}/auth/v1/login`, payload)
    
    return result.data
}

export const getDataNasabah = async(id, page, keyword) => {
    let result = await axiosDev.get(`/banksampah/v1/getAllUsers`, {
        params: {
            id_user: id,
            page: page,
            keyword: keyword
        }
    })

    return result.data
}