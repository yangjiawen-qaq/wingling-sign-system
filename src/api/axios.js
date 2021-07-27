import axios from 'axios'
axios.defaults.baseURL=''
axios.interceptors.request.use(config=>{
    return config
})
axios.interceptors.response.use(config=>{
    return config
})
// eslint-disable-next-line import/no-anonymous-default-export
export default (url,method,params,data)=>{
    return new Promise((resolve,reject)=>{
        axios({
            url,
            method,
            params,
            data
        }).then((res)=>{
            resolve(res)
        },(err)=>{
            reject(err)
        })
    })
}
