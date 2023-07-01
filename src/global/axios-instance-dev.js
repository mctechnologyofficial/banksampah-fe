import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BANK_SAMPAH_API_DEV || 'http://127.0.0.1:3010/api',
  headers: { 'X-Custom-Header': 'foobar' }
});
