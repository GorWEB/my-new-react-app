import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userAvatarImage from '../../images/userImage.png';
import Preloader from "../common/Preloader/Preloader";
import reactIcon from '../../images/reactIcon.png';

const Header = (props) => {
    if(!props.profile){
        return <Preloader />;
    }
    return(
        <header className={s.header}>
            <img alt='' src={reactIcon} className={s.iconImage} />

        <div className={s.loginBlock}>
            {props.isAuth
                ?<div className={s.loginBlockName}> {props.login} <div> <button style={{backgroundColor: '#4CAF50'}} onClick={props.logout}>Log out</button> </div> </div>
                          : <NavLink to={'/login'}>Login</NavLink>}
        <div className={s.userAvatarImage}> <img alt=''
                                                 src={props.profile.photos.small ?
                                                 props.profile.photos.small: userAvatarImage }/>
        </div>
        </div>
        </header>
    );
};

export default Header;