import React from "react";
import s from './Navbar.module.css';
import userImage from '../../images/userImage.png';

const Friend = (props)=>{
    return (
        <div className={s.friendItem}>
            <img width='20px' height='20px' src={userImage} alt='image'/>
            <div className={s.friendName}>{props.name}</div>
        </div>

    )
};

export default Friend;