import React from 'react';
import './main-navigation-bar.css'
import NavigationOptions from "../navigation-options/navigation-options";
import {portfolioStore} from '../../Store/portfolio-store'

function MainNavigationBar(props) {

    return (<NavigationOptions styleIdentifier={"main-navigation-bar"} navigationOptions={portfolioStore.getState().blocks}>
            </NavigationOptions>)
}


export default MainNavigationBar