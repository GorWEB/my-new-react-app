const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SEND_MESSAGE:
            let body =  action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 7, message: body}]
            };
        default: return state;
    }
};

export const sendMessageCreator = (newMessageBody)=>{
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};


export default dialogsReducer;