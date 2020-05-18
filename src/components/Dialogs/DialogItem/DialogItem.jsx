import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialogs}>
            <img src= {props.avaimg} width='20px' height='20px' alt='avatar'/>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};


export default DialogItem;