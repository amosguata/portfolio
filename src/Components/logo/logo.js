import React from 'react';
import {portfolioStore} from '../../Store/portfolio-store'
import {withRouter} from "react-router-dom";
import './logo.css'
function Logo(props) {

    function homeRedirect () {
        props.history.push("/");
    }

    return (<img className="logo" src={portfolioStore.getState().logo} alt="Logo" onClick={homeRedirect}/>);
}

export default withRouter(Logo);

