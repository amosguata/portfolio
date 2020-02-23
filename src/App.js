import React from 'react';
import './App.css';
import ScrollingFloaterBlock from "./Components/scrolling-floater-block/scrolling-floater-block";
import {portfolioStore} from './Store/portfolio-store'
import MainNavigationBar from "./Components/main-navigation-bar/main-navigation-bar";
import {Link, scroller} from 'react-scroll'
import { Element } from 'react-scroll'
class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = portfolioStore.getState();
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.scrollSection) {
            scroller.scrollTo(this.props.match.params.scrollSection, {smooth: true, offset:0, duration:1000});
        }
    }

    render() {
        return (
            <div className="App">
                <div className="headline">
                    <div className="text">
                        <div className="title" onClick={this.scroll}>{this.state.headline}</div>
                        <div className="description">{this.state.description}</div>
                    </div>
                    <MainNavigationBar> </MainNavigationBar>
                </div>
                <div className="content">
                    {
                        this.state.blocks.map(block => <ScrollingFloaterBlock key={block.name}
                                                                              value={block}> </ScrollingFloaterBlock>)
                    }
                </div>
            </div>
        );
    }
}

export default App;
