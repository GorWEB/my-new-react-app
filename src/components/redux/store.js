import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';


const store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, likesCount: 11, message: 'Hi' },
                {id: 2, likesCount: 12, message: 'How are',},
                {id: 3, likesCount: 13, message: 'You', }
            ],
            newPostText: 'Some text',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are'},
                {id: 3, message: 'You'},
                {id: 4, message: 'React'},
                {id: 5, message: 'Was'},
                {id: 6, message: 'Amazing'}
            ],
            dialogs: [
                {id: 1, name: 'Gor', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 2, name: 'Gor1', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 3, name: 'Gor2', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 4, name: 'Gor3', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 5, name: 'Gor4', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 6, name: 'Gor5', imgSrc: 'https://www.shankarainfra.com/img/avatar.png'}
            ],
            newMessageBody: ''
        },
        sidebar:{
            friends:[
                {id: 1, name: 'Gor', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 1, name: 'Gor1', imgSrc:'https://www.shankarainfra.com/img/avatar.png'},
                {id: 1, name: 'Gor2', imgSrc:'https://www.shankarainfra.com/img/avatar.png'}
            ]
        }
    },
    _callSubscriber(){
        console.log('Changing state');
    },
    getState(){return this._state},
    subscribe (observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    },
};



export default store;


