import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: "http://192.168.43.129:8080",
        headers:{
            "Access-Control-Allow-Origin":'*'
        }
        // timeout:10000
    })
    // instance.interceptors.request.use(config=>{ //拦截器
    //     if(localStorage.getItem('Authorization')){
    //         config.headers.Authorization=localStorage.getItem('Authorization');
    //     }
    //     return config;
    // },
    // error=>{
    //     return Promise.reject(error);
    // }
    // )
    return instance(config);
}