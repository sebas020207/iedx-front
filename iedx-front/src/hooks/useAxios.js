import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});


const useAxios = () => {
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token !== null && token !== '' && token !== undefined){
      //config.withCredentials = true;
      config.headers.Authorization = `Bearer ${token}`;
      //config.headers.token = token;
    }
    return config;
  });

  return { 
    get: instance.get,
    post: instance.post,
    put: instance.put
  };
};

export default useAxios;
