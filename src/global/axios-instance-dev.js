import axios from 'axios';
const ACCESS_TOKEN = sessionStorage.getItem('access_token')

const axiosDev = axios.create({
  baseURL: process.env.BANK_SAMPAH_API_DEV || 'https://api-demo.mctechnologyofficial.com/api',
  timeout: 20000,
  headers: {
    Authorization: "bearer " + ACCESS_TOKEN
  }
});

export default axiosDev
