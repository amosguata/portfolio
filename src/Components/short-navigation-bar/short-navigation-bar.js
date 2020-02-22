import React from 'react';
import './short-navigation-bar.css'
import NavigationOptions from "../navigation-options/navigation-options";
import {portfolioStore} from '../../Store/portfolio-store'

function ShortNavigationBar(props) {

    const blocks = portfolioStore.getState().blocks.map(block => ({name: block.name}));

    return (<NavigationOptions styleIdentifier={"short-navigation-bar"} navigationOptions={blocks}>
            </NavigationOptions>)
}


export default ShortNavigationBar