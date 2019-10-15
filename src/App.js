import React from 'react';
import brush from './Images/brush.jpg'
import logo from './Images/kh_logo.png'
import './App.css';
import ScrollingFloaterBlock from "./Components/scrolling-floater-block/scrolling-floater-block";
import {Link} from 'react-scroll'


class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            headline: "Product Designer",
            logo: logo,
            blocks: [{
                name: "about",
                content: {
                    contentType: "text",
                    value: "about me and beyond"
                }
            },
                {
                    name: "work",
                    content: {
                        contentType: "clickableImages",
                        value: [{
                            image: brush,
                            name: "brush",
                            clickCallback: () => {
                                console.log('hello')
                            },
                        },
                            {
                                image: brush,
                                name: "brush2",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            }]
                    }
                },
                {
                    name: "contact",
                    content: {
                        contentType: "text",
                        value: "mail@mail.com"
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <div className="parallax headline">
                    <div>{this.state.headline}</div>
                    <img className="logo" src={this.state.logo} alt="Logo"/>
                    <ul className="items">
                        {
                            this.state.blocks.map(block =>
                                <li key={block.name}>
                                    <Link to={block.name} smooth={true} offset={0} duration={500}>
                                        {block.name}
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
