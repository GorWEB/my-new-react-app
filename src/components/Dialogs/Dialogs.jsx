import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {ElementCreator} from "../common/FormControls/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem avaimg={d.imgSrc} key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>);

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    };
    if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
            <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        <div className={s.dialogsItem}>
                            {dialogsElements}
                        </div>
                    </div>
                    <div className={s.messages}>
                        {messagesElements}
                        <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
            </div>
);
};

const maxLength = maxLengthCreator(100);
const Textarea = ElementCreator("textarea");


const AddMessageForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.textDiv}><Field component={Textarea}
                                          name='newMessageBody'
                                          validate={[required,maxLength]}
                                          className={s.messageArea}
                                          placeholder='Введите сообщение' > </Field> </div>
        <div className={s.msgBtnArea}><button className={s.sendMsgBtn} > Отправить </button> </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default Dialogs;