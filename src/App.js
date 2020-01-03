import React from 'react';
import brush from './Images/brush.jpg'
import bowl from './Images/Bowl.jpg'
import chair from './Images/chair.jpg'
import headphons from './Images/headphons.jpg'
import kettle from './Images/kettle.jpg'
import stool from './Images/stool.jpg'
import stools from './Images/stools.jpg'
import toaster from './Images/toaster.jpg'
import silo from './Images/silo.jpg'
import logo from './Images/logo/logo-black.png'


import './App.css';
import ScrollingFloaterBlock from "./Components/scrolling-floater-block/scrolling-floater-block";
import AdditionalInfoModal from "./Components/addition-info-modal/additional-info-modal";
import {Link} from 'react-scroll'


class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            headline: "Klil Horesh \n\n" +
                      "Industrial Designer",
            logo: logo,
            blocks: [{
                name: "about",
                containerStyle:{ "background-color" :  "#FF0B9A"},
                textStyle: {"color" : "white"},
                content: {
                    contentType: "text",
                    value: (
                        <p>
                            Hello, <br/>
                            <bold> My name is klil, I am a designer from israel living in Tel aviv. </bold> <br/> <br/>
                            Graduated from the Shenkar College of Engineering & Design and received my B.Des. degree in industrial design. <br/> <br/>
                            I aspire to make my design associated with humane feelings and experiences, and I look around me to observe the relationship between people and their objects in order to learn how can we use the great power of design more effectively. <br/> <br/>
                            Thanks for stopping by.
                        </p>)
                }
            },
                {
                    name: "work",
                    containerStyle:{ "background-color" :  "#FFFFFF"},
                    textStyle: {"color" : "black"},
                    content: {
                        contentType: "clickableImages",
                        value: [{
                            image: brush,
                            name: "brush",
                            clickCallback: (info) => {
                                this.setState({shouldShowModal: true});
                                this.state.currentModalContent = info;
                            },
                            additionalInfo: [
                                {
                                    type: "images",
                                    value: []
                                },
                                {
                                    type: "text",
                                    value:  "test text"
                                }
                            ]
                            },
                            {
                                image: silo,
                                name: "silo",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: chair,
                                name: "chair",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: stool,
                                name: "stool",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: stools,
                                name: "stools",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: bowl,
                                name: "bowl",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },

                            {
                                image: kettle,
                                name: "kettle",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: toaster,
                                name: "toaster",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            },
                            {
                                image: headphons,
                                name: "headphons",
                                clickCallback: (info) => {
                                    console.log('hello')
                                },
                                additionalInfo: []
                            }
                        ]
                    }
                },
                {
                    name: "contact",
                    containerStyle:{ "background-color" :  "#1A1A1A"},
                    textStyle: {"color" : "white"},
                    content: {
                        contentType: "text",
                        value: (<p>
                                    <a href="mailto:klilhoreshg@gmail.com">klilhoreshg@gmail.com</a>
                                </p>)
                    }
                }
            ]
        };

        this.state.shouldShowModal = false;
        this.state.currentModalContent = {content: []};

        this.modalClosed = this.modalClosed.bind(this);
    }

    modalClosed () {
        this.setState({shouldShowModal: false });
    }

    render() {
        return (
            <div className="App">

                <AdditionalInfoModal shouldShowModal={this.state.shouldShowModal} onCloseModal={this.modalClosed} content={this.state.currentModalContent}>
                </AdditionalInfoModal>

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
