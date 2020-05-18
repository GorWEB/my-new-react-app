import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';


let initialState = {
    posts: [
        {id: 1, likesCount: 11, message: 'Hello' },
        {id: 2, likesCount: 12, message: 'Its my',},
        {id: 3, likesCount: 13, message: 'first post', }
    ],
    profile: null,
    status: ''
};

let lastPostId = initialState.posts[initialState.posts.length-1].id;
const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: ++lastPostId, message: action.newPostBody, likesCount: 0}],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default: return state;
    }
};

export const addPostActionCreator = (newPostBody)=>{
    return {
        type: ADD_POST,
        newPostBody
    }
};

const setUserProfile = (profile)=>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
const setStatus = (status)=>{
    return {
        type: SET_STATUS,
        status
    }
};
const updateStatus = (status)=>{
    return {
        type: UPDATE_STATUS,
        status
    }
};
export const getUserProfileThunk = (userId)=> async (dispatch)=>{
    let data = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
};
export const getStatusThunk = (userId)=> async (dispatch)=>{
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatusThunk = (status)=>async (dispatch)=>{
    let data = await profileAPI.updateStatus(status);
    if(data.resultCode === 0) {
        dispatch(updateStatus(data));
    }
};


export default profileReducer;