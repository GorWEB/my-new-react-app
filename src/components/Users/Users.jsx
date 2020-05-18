import React from "react";
import styles from './users.module.css';
import userImg from '../../images/userImage.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage,onPageChange,totalUsersCount,pageSize,...props})=> {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={10}
            />

            {props.users.map((u) => <div className={styles.userBlock} key={u.id}>
                    <span>
                        <div>
                    <NavLink to={'/profile/'+u.id}>
                    <img alt='userImg' src={u.photos.small != null ? u.photos.small : userImg}
                         className={styles.photoUser}/>
                    </NavLink>
                    </div>
                <div>
                    { u.followed
                        ? <button style={{backgroundColor: '#f44336'}} disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() =>{
                            props.unfollow(u.id);
                          } }> Unfollow </button>

                        : <button style={{backgroundColor: '#4CAF50'}} disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.follow(u.id);
                         } }> Follow </button>}
                </div>
                    </span>
                    <span>
                        <span><div>{u.name} </div>  <div> {u.status} </div> </span>
                    </span>
                </div>
            )}
        </div>
    )
};


export default Users;