import React from 'react';
import './App.css';
import ScrollingFloaterBlock from "./Components/scrolling-floater-block/scrolling-floater-block";
import {Link} from 'react-scroll';
import {portfolioStore} from './Store/portfolio-store'


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
                    <img className="logo" src={this.state.logo} alt="Logo"/>
                    <div className="text">{this.state.headline}</div>
                    <ul className="items">
                        {
                            this.state.blocks.map(block =>
                                <li key={block.name}>
                                    <Link to={block.name} smooth={true} offset={0} duration={500}>
                                        <span className="underline">{block.name.substring(0,1)}</span>{block.name.substring(1)}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
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
