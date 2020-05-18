import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImg from '../../../images/userImage.png'
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />;
    }
    if(!props.status){
        return <Preloader />;
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div> {props.profile.fullName}</div>
                <img alt='Image' style={{width:'200px'}} src={props.profile.photos.large? props.profile.photos.large: userImg}/>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};


export default ProfileInfo;