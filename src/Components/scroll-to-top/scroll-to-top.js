import React from 'react';
import {withRouter} from "react-router-dom";
import { animateScroll } from 'react-scroll'
class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            animateScroll.scrollToTop();
        }
    }

    componentDidMount(prevProps) {
        window.scrollTo(0, 0);
    }
    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);