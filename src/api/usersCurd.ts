import http from './config'

const userCreate = (params:any)=>http.post('/user/register',params)
const isLoginApi =  (params:any)=>http.post('/user/login',params)
//get
const getUserInfo = ()=>http.get('/user/auth/info')
const updateUser =  (params:any)=>http.post('/user/auth/update',params)

export {
    getUserInfo,
    userCreate,
    isLoginApi,
    updateUser,
}