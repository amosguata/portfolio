import React from 'react';
import App from "./App";
import AdditionalInfo from "./Components/additional-info/additional-info";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from 'react-router-dom'
import Header from "./Components/header/header";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "UA-159066855-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function PortfolioRouter() {

    return (<Router history={history}>
                <Header> </Header>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/:scrollSection" component={App}/>
                    <Route path="/additional-info/:workName" component={AdditionalInfo}/>
                </div>
            </Router>)
}

export default PortfolioRouter;