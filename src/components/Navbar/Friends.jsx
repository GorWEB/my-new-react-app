import React from "react";
import s from './Navbar.module.css';
import Friend from "./Friend";


const Friends = (props)=>{
    let friendItem = props.friends.map((f)=><Friend key={f.id}  name={f.name} id={f.id} />);
    return (
        <div className={s.friendsBlock}>
            <div className={s.friendHead}><p>Friends</p></div>
            <div className={s.itemBlock}>{friendItem}</div>
        </div>
    )
};

export default Friends;