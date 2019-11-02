import React from 'react';
import brush from './Images/brush.jpg'
import bowl from './Images/bowl.jpg'
import chair from './Images/chair.jpg'
import headphons from './Images/headphons.jpg'
import kettle from './Images/kettle.jpg'
import stool from './Images/stool.jpg'
import stools from './Images/stools.png'
import toaster from './Images/toaster.jpg'

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
                    value: "Hello,\n" +
                        "My name is klil, I am a designer from israel living in Tel aviv.\n" +
                        "Graduated from the Shenkar College of Engineering & Design and received my B.Des. degree in industrial design. \n" +
                        "I aspire to make my design associated with humane feelings and experiences, and I look around me to observe the relationship between people and their objects in order to learn how can we use the great power of design more effectively. \n" +
                        "Thanks for stopping by.\n"
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
                                image: chair,
                                name: "chair",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: bowl,
                                name: "bowl",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: headphons,
                                name: "headphons",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: kettle,
                                name: "kettle",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: stool,
                                name: "stool",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: stools,
                                name: "stools",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            },
                            {
                                image: toaster,
                                name: "toaster",
                                clickCallback: () => {
                                    console.log('hello')
                                }
                            }
                        ]
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
