import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
       'API-KEY': 'd4f25d00-d786-4b93-abc3-c96ab32e3602'
   }
});
// 5d2314f6-8b9d-4e98-aa8f-09cb31c3d6b3
export const usersAPI =  {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
       return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId) {
        console.warn('Use profileAPI');
        return profileAPI.getUserProfile(userId);
    }
};
export const profileAPI =  {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response=>response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response=>response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status}).then(response=>response.data)
    }
};

export const authAPI =  {
    getAuthUserProfile(){
        return instance.get(`auth/me`).then(response=>response.data)
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe}).then(response=> response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(response=>response.data)
    },
};




