import React from 'react';
import './footer.css'
import ShortNavigationBar from "../short-navigation-bar/short-navigation-bar";
import Logo from "../logo/logo";


function Footer(props) {

    return (<div className={"footer"}>
                <ShortNavigationBar> </ShortNavigationBar>
                <Logo/>
            </div>);
}


export default Footer;
