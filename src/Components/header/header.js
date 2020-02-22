import React from 'react';
import {portfolioStore} from '../../Store/portfolio-store'
import './header.css'
import {withRouter} from "react-router-dom";
 function Header (props) {

    function homeRedirect () {
        props.history.push("/");
    }

    return (<div className="header">
                <img className="logo" src={portfolioStore.getState().logo} alt="Logo" onClick={homeRedirect}/>
            </div>);
}

export default withRouter(Header);

