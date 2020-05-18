import React from "react";
import {connect} from "react-redux";
import NavBar from "./Navbar";

let mapStateToProps = (state)=>{
    return {
    }
};

let mapDispatchToProps = (dispatch)=> {
    return {
    }
};

const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default NavBarContainer;