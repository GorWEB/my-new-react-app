import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentWillMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    onPageChange = (currentPage)=>{
        this.props.getUsersThunkCreator(currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(currentPage);
        // getUsers(currentPage,this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     })
    };


    render() {
        return (<>
                {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChange={this.onPageChange}
                   followingInProgress={this.props.followingInProgress}/>
            </>
        )
    }
}


let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(connect(mapStateToProps,{follow,unfollow,
    setCurrentPage,toggleFollowingProgress,getUsersThunkCreator}),WithAuthRedirect)(UsersContainer);
//
// connect(mapStateToProps,{follow,unfollow,
//     setCurrentPage,toggleFollowingProgress,getUsersThunkCreator})(UsersContainer);