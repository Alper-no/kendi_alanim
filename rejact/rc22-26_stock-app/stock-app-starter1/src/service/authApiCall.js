import axios from "axios";
import {toastErrorNotify, toastSuccessNotify} from '../helper/ToastNotify'

export const login = async (userData) => {
  const BASE_URL = "13554.fullstack.clarusway.com/";
  try {
    const { data } = await axios.post(`${BASE_URL}/account/login/`, userData)
    
    toastSuccessNotify('Login Performed');
  } catch (error) {
    console.log(error);
  }
};
