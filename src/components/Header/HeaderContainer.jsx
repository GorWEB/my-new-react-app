import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk, setAuthUserData, setUserProfile} from "../redux/authReducer";

class HeaderContainer extends React.Component{
    render() {
        return (
        <Header {...this.props} profile={this.props.profile} logout={this.props.logoutThunk}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      profile: state.auth.profile
    }
};

export default connect(mapStateToProps,{setAuthUserData,setUserProfile,logoutThunk})(HeaderContainer);