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
import brush1 from '../Images/brush/brush (1).jpg'
import brush2 from '../Images/brush/brush (2).jpg'
import brush3 from '../Images/brush/brush (3).jpg'
import brush4 from '../Images/brush/brush (4).jpg'
import brush5 from '../Images/brush/brush (5).jpg'
import brush6 from '../Images/brush/brush (6).jpg'

import bowl1 from '../Images/bowl/bowl (1).jpg';
import bowl2 from '../Images/bowl/bowl (2).jpg';
import bowl3 from '../Images/bowl/bowl (3).jpg';
import bowl4 from '../Images/bowl/bowl (4).jpg';

import chair1 from '../Images/chair/chair (1).jpg'
import chair2 from '../Images/chair/chair (2).jpg'

import kettel1 from '../Images/kettel/kettel (1).jpg';
import kettel2 from '../Images/kettel/kettel (2).jpg';
import kettel3 from '../Images/kettel/kettel (3).jpg';
import kettel4 from '../Images/kettel/kettel (4).jpg';

import stool1 from '../Images/stool/stool (1).jpg';
import stool2 from '../Images/stool/stool (2).jpg';
import stool3 from '../Images/stool/stool (3).jpg';

import stools1 from '../Images/stools/stools (1).jpg';
import stools2 from '../Images/stools/stools (2).jpg';
import stools3 from '../Images/stools/stools (3).jpg';
import stools4 from '../Images/stools/stools (4).jpg';
import stools5 from '../Images/stools/stools (5).jpg';
import stools6 from '../Images/stools/stools (6).jpg';
import stools7 from '../Images/stools/stools (7).jpg';
import stools8 from '../Images/stools/stools (8).jpg';
import stools9 from '../Images/stools/stools (9).jpg';
import stools10 from '../Images/stools/stools (10).jpg';
import stools11 from '../Images/stools/stools (11).jpg';

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
                    image: silo,
                    name: "silo",
                    additionalInfo: []
                },
                    {
                    image: brush,
                    name: "brush",
                    additionalInfo: [
                        {
                            type: "title",
                            value: {
                                headline: "DUSTPAN AND BRUSH",
                                description: "Dirt is a rough unpleasant matter which we want to get rid of it as soon as possible. The brush that I’ve designed is my attempt to bring some elegance and gentleness to the cleaning process."
                            }
                        },
                        // {
                        //     type: "image",
                        //     value: chair
                        // },
                        {
                            type: "images",
                            value: [{id: "1", img: brush1}, {id: "2", img: brush2}, {id: "3", img: brush3}, {id: "4", img: brush4}, {id: "5", img: brush5}, {id: "6", img: brush6}]
                        }
                        // {
                        //     type: "subTitle",
                        //     value: {
                        //         headline: "",
                        //         description: ""
                        //     }
                        // }
                    ]
                },
                    {
                        image: stools,
                        name: "stools",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "STOOLS",
                                description: "A series of wall stools.\n" +
                                    "During my final project in Shenkar, i created a series of stools that interact with the edges of the room and invite the seater to take take a position of a side  observant.\n"
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: stools1}, {id: "2", img: stools2}, {id: "3", img: stools3},
                                    {id: "4", img: stools4}, {id: "5", img: stools5}, {id: "6", img: stools6},
                                    {id: "7", img: stools7}, {id: "8", img: stools8}, {id: "9", img: stools9},
                                    {id: "10", img: stools10}, {id: "11", img: stools11}]
                            }
                        ]
                    },
                    {
                        image: chair,
                        name: "chair",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "ready made chair",
                                description: "new chair from old chair. during this 1 week project all students received some old chairs from a garage and remade them."
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: chair1}, {id: "2", img: chair2}]
                            }
                        ]
                    },
                    {
                        image: stool,
                        name: "stool",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "STOOLS",
                                description: "The main concept was to create a stool that is on the seam line between a sculpture and a product. The stool offers both a high and a low position."
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: stool1}, {id: "2", img: stool2}, {id: "3", img: stool3}]
                            }
                        ]
                    },
                    {
                        image: bowl,
                        name: "bowl",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "BOWL",
                                description: "The inspiration to this project came from Japanese  origami. The idea was to make a bowl that is light as paper made of a heavy substance."
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: bowl1}, {id: "2", img: bowl2}, {id: "3", img: bowl3}, {id: "4", img: bowl4}]
                            }
                        ]
                    },
                    {
                        image: kettle,
                        name: "kettle",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "KETTEL",
                                description: "The action of pouring the boiling water into the cup was my focus on this project. I designed a prominent nozzle that creates a flat water flow and a conic kettle body to direct the eye to it."
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: kettel1}, {id: "2", img: kettel2}, {id: "3", img: kettel3}, {id: "4", img: kettel4}]
                            }
                        ]
                    },
                    {
                        image: toaster,
                        name: "toaster",
                        additionalInfo: null
                    },
                    {
                        image: headphons,
                        name: "headphons",
                        clickCallback: (info) => {
                            console.log('hello')
                        },
                        additionalInfo: null
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
