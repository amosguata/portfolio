import React from 'react';
import brush from '../Images/brush.jpg'
import bowl from '../Images/Bowl.jpg'
import chair from '../Images/chair.jpg'
import headphons from '../Images/headphons.jpg'
import kettle from '../Images/kettle.jpg'
import stool from '../Images/stool.jpg'
import stools from '../Images/stools.jpg'
import toaster from '../Images/toaster.jpg'
import silo from '../Images/silo.jpg'
import logo from '../Images/logo/logo-black.png'

export const portfolioData = {
    headline: "Klil Horesh \n\n" +
        "Industrial Designer",
    logo: logo,
    blocks: [{
        name: "about",
        containerStyle:{ "backgroundColor" :  "#FF0B9A"},
        textStyle: {"color" : "white"},
        content: {
            contentType: "text",
            value: (
                <p>
                    Hello, <br/>
                    <span style={{"fontWeight": "bold"}}> My name is klil, I am a designer from israel living in Tel aviv. </span> <br/> <br/>
                    Graduated from the Shenkar College of Engineering & Design and received my B.Des. degree in industrial design. <br/> <br/>
                    I aspire to make my design associated with humane feelings and experiences, and I look around me to observe the relationship between people and their objects in order to learn how can we use the great power of design more effectively. <br/> <br/>
                    Thanks for stopping by.
                </p>)
        }
    },
        {
            name: "work",
            containerStyle:{ "backgroundColor" :  "#FFFFFF"},
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
                            type: "title",
                            value: {
                                headline: "test text",
                                description: "text text"
                            }
                        },
                        {
                            type: "image",
                            value: chair
                        },
                        {
                            type: "images",
                            value: [brush, bowl, stool]
                        },
                        {
                            type: "subTitle",
                            value: {
                                headline: "test text",
                                description: "text text"
                            }
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
            containerStyle:{ "backgroundColor" :  "#1A1A1A"},
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
