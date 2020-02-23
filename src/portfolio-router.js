import React from 'react';
import App from "./App";
import AdditionalInfo from "./Components/additional-info/additional-info";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from 'react-router-dom'
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

function PortfolioRouter() {

    return (<Router>
                <Header> </Header>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/additional-info/:workName" component={AdditionalInfo}/>
                </div>
            </Router>)
}

export default PortfolioRouter;