
let initialState = {
    friends:[
        {id: 1, name: 'Gor'},
        {id: 2, name: 'Gor1'},
        {id: 3, name: 'Gor2'}
    ]
};

const sidebarReducer = (state=initialState, action)=>{
    return {...state};
};
export default sidebarReducer;