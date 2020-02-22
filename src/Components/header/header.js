import React from 'react';
import './header.css'
import {withRouter} from "react-router-dom";
import Logo from "../logo/logo";
 function Header (props) {

    function homeRedirect () {
        props.history.push("/");
    }

    return (<div className="header">
                <Logo/>
            </div>);
}

export default withRouter(Header);

