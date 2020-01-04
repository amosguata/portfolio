import React from 'react';
import App from "./App";
import AdditionalInfo from "./Components/additional-info/additional-info";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from 'react-router-dom'

function PortfolioRouter() {

    return (<Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/additional-info/:workName" component={AdditionalInfo}/>
                </div>
            </Router>)
}

export default PortfolioRouter;