import React from 'react';
import {sendMessageCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state)=>{
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage: (newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};


// let AuthRedirectComponent = WithAuthRedirect(Dialogs);
//
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps,mapDispatchToProps),WithAuthRedirect)(Dialogs);