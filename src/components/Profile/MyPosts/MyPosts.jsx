import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {ElementCreator} from "../../common/FormControls/formsControls";


const MyPosts = React.memo(props => {
    let postElements = props.posts.map((p) => <Post key={p.id}
                                                    id={p.id}
                                                    message={p.message}
                                                    likesCount={p.likesCount}
    />);

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
})

const Textarea = ElementCreator("textarea");
const maxLength10 = maxLengthCreator(10);


const PostForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostBody'
                       placeholder='Введи текст'
                       validate={[required,maxLength10]} />
            </div>
            <div>
                <button style={{backgroundColor: '#4CAF50'}}> Add post</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'addPostForm'})(PostForm);

export default MyPosts;