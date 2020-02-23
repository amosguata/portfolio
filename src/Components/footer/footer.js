import React from 'react';
import './footer.css'
import ShortNavigationBar from "../short-navigation-bar/short-navigation-bar";
import Logo from "../logo/logo";
import { animateScroll } from 'react-scroll'

function Footer(props) {

    return (<div className={"footer"}>
                <ShortNavigationBar> </ShortNavigationBar>

                <div className="up" onClick={() => animateScroll.scrollToTop({smooth: true, offset:0, duration:1000})}> Up </div>

            </div>);
}


export default Footer;
