import React from 'react';
import './App.css';
import ScrollingFloaterBlock from "./Components/scrolling-floater-block/scrolling-floater-block";
import {portfolioStore} from './Store/portfolio-store'
import MainNavigationBar from "./Components/main-navigation-bar/main-navigation-bar";


class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = portfolioStore.getState();
    }

    render() {
        return (
            <div className="App">
                <div className="headline">
                    <div className="text">
                        <div className="title">{this.state.headline}</div>
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
