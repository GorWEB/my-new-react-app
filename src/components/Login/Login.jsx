import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginThunk} from "../redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {ElementCreator} from "../common/FormControls/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styles from '../common/FormControls/formsControls.module.css';

const maxLength = maxLengthCreator(20);
const Input = ElementCreator("input");

const LoginForm = ({handleSubmit,error})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div><Field name={'email'} placeholder={'Email'} component={Input} validate={[required,maxLength]} /> </div>
            <div> <Field name={'password'} placeholder={'Password'} type='password' validate={[required,maxLength]} component={Input}/> </div>
            <div> <Field name={'rememberMe'} component={Input} type={'checkbox'} />  Remember me </div>
            <div className={styles.errorMessage}>{error} </div>
            <div> <button >Login </button> </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({loginThunk,isAuth})=>{
    const onSubmit = (formData)=>{
        loginThunk(formData.email,formData.password,formData.rememberMe);
    };
    if(isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1> LOGIN </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {loginThunk}))(Login);