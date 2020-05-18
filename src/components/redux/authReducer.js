import {authAPI} from "../API/api";
import * as axios from 'axios';
import {stopSubmit} from "redux-form";

const SET_USER_DATA  = 'SET_USER_DATA';
const SET_USER_PROFILE  = 'SET_USER_PROFILE';

let initialState = {
    usersId: null,
    email :null,
    login: null,
    isAuth: false,
    profile: null,
    loginData: null
};

const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload,
            };
        case SET_USER_PROFILE:
            return  {
                ...state,
                ...action.data,
                profile: action.profile
            };
        default: return state;
    }
};



export const setAuthUserData = (userId,email,login,isAuth)=>({ type: SET_USER_DATA,payload:{userId,email,login,isAuth} });

export const setUserProfile = (profile)=>({ type: SET_USER_PROFILE,profile });


export const getAuthUserProfile =()=> async (dispatch)=> {
    let data = await authAPI.getAuthUserProfile();
    if(data.resultCode === 0){
        let {id,login,email}=data.data;
        dispatch(setAuthUserData(id,login,email,true));
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(data=>{
                dispatch(setUserProfile(data.data));
                    })
            }
};

export const loginThunk =(email,password,rememberMe)=> async (dispatch)=> {
    let data = await authAPI.login(email,password,rememberMe);
        if(data.resultCode === 0){
            dispatch(getAuthUserProfile());
            } else{
                let message = data.messages.length >0 ? data.messages[0]: 'Ошибка входа';
                dispatch(stopSubmit('login',{_error: message}))
            }
};
export const logoutThunk =()=>async (dispatch)=> {
    let data = await authAPI.logout();
    if(data.resultCode === 0){
        dispatch(setAuthUserData(null,null,null,false));
            }
};

export default authReducer;