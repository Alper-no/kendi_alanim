import axios from "axios";

export const login = async (userData) => {
  const BASE_URL = "13554.fullstack.clarusway.com/";
  try {
    const { data } = await axios.post(`${BASE_URL}/account/login/`, userData)
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
