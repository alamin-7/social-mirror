import axios from 'axios';
import { Navigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/user';


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log('login response from auth service',response.data);
    if (response.data.token) {
      console.log('setting token-------',response.data.token);
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getProfile = async () => {
  const token = localStorage.getItem('token');
  console.log('getting token....',token);
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};