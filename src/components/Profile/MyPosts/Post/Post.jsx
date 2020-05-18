import React from "react";
import s from './Post.module.css';

const Post = (props) => {
        return(
        <div className={s.item}>
            <img src='https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg'  alt="Image"/>
                {props.message}
            <div><span>Like</span>{props.likesCount} </div>
        </div>
    );
};

export default Post;