import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId && this.props.isAuth){
            userId = this.props.authUserId;
            if(!userId){
                this.props.history.push('/login');
                debugger;
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}
            />
        );
    }
}

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);


let mapStateToProps = (state)=>{
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps,{getUserProfileThunk,getStatusThunk,updateStatusThunk}),
    withRouter)(ProfileContainer);
