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

import silo1 from '../Images/silo/gallary/silo (1).jpg'
import silo2 from '../Images/silo/gallary/silo (2).jpg'
import silo3 from '../Images/silo/gallary/silo (3).jpg'
import silo4 from '../Images/silo/gallary/silo (4).jpg'
import silo5 from '../Images/silo/gallary/silo (5).jpg'
import silo6 from '../Images/silo/gallary/silo (6).jpg'
import silo7 from '../Images/silo/gallary/silo (7).jpg'

import siloGif1 from '../Images/silo/gifs/gif (1).gif'
import siloGif2 from '../Images/silo/gifs/gif (2).gif'
import siloGif3 from '../Images/silo/gifs/gif (3).gif'
import siloGif4 from '../Images/silo/gifs/gif (4).gif'
import siloGif5 from '../Images/silo/gifs/gif (5).gif'
import siloGif6 from '../Images/silo/gifs/gif (6).gif'
import siloOpeningImage from '../Images/silo/images/opening.jpg'
import siloDesignGuidlines from '../Images/silo/images/design-guidelines.jpg'
import siloEarlyExploration from '../Images/silo/images/early-exploration.jpg'

import brushSmall from '../Images/smallImages/brush.jpg'
import bowlSmall from '../Images/smallImages/bowl.jpg'
import chairSmall from '../Images/smallImages/chair.jpg'
import kettleSmall from '../Images/smallImages/kettel.jpg'
import stoolSmall from '../Images/smallImages/stool.jpg'
import stoolsSmall from '../Images/smallImages/stools.jpg'
import toasterSmall from '../Images/smallImages/toaster.jpg'
import siloSmall from '../Images/smallImages/silo.jpg'


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
                    image: { regularImage: silo, smallImage: siloSmall },
                    name: "silo",
                    additionalInfo:
                        [
                         {
                        type: "title",
                        value: {
                            headline: "Silo",
                            description: "Simple vacuum-sealing container system that keeps food fresher, longer."
                        }
                    },
                         {
                                type: "image",
                                value: siloOpeningImage
                            },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "Overview",
                                    description: "Food waste is a global epidemic." +
                                        "According to a recent study by Boston Consulting Group, each year 1.6 billion tons of food" +
                                        "worth about $1.2 trillion are lost or go to waste. Most of this waste happens at the" +
                                        "consumer level with more than 40% of household food going bad. "
                                }
                        },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "Role & Duration",

                                    description: (<div><span style={{'fontFamily': 'SourceSans-Bold, sans-serif'}}> Junior designer  </span>
                                        <span style={{'fontFamily': 'SourceSans-Light, sans-serif'}}>| 2017 - 2018 </span>
                                        <br/>
                                        <span style={{'fontFamily': 'SourceSans-Bold, sans-serif'}}> Designer & project manager </span>
                                        <span style={{'fontFamily': 'SourceSans-Light, sans-serif'}}>| 2018 - current </span>
                                        <br/>
                                    </div>)
                                }
                            },
                         {
                            type: "images",
                            value: [{id: "1", img: silo1}, {id: "2", img: silo2}, {id: "3", img: silo3}, {id: "4", img: silo4}, {id: "5", img: silo5}, {id: "6", img: silo6}, {id: "7", img: silo7}]
                        },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "The Problem",
                                    description: "Food waste is a global epidemic." +
                                        "According to a recent study by Boston Consulting Group, each year 1.6 billion tons of food" +
                                        "worth about $1.2 trillion are lost or go to waste. Most of this waste happens at the" +
                                        "consumer level with more than 40% of household food going bad."
                                }
                            },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "The Solution",
                                    description: "simple vacuum-sealing container system that is easy to use on a daily basis and " +
                                        "encourages the user engagement. a product that integrates with the kitchen environment " +
                                        "in a smart way that takes into acount that the kitchen’s counterspace is an expensive real " +
                                        "estate. "
                                }
                            },
                         {
                            type: "image",
                            value: siloGif1
                        },
                         {
                            type: "image",
                            value: siloGif2
                        },
                         {
                                type: "image",
                                value: siloGif3
                            },
                         {
                                type: "group",
                                name: "Design guide lines",
                                value: [{
                                    type: "subTitle",
                                    value: {
                                        headline: "Design Guidelines",
                                        description: ""
                                    }
                                },
                                    {
                                        type: "image",
                                        value: siloDesignGuidlines
                                    }]
                            },
                         {
                                type: "group",
                                name: "Early exploration",
                                value: [{
                                    type: "subTitle",
                                    value: {
                                        headline: "Early Explorations",
                                        description: ""
                                    }
                                },
                                    {
                                        type: "image",
                                        value: siloEarlyExploration
                                    }
                                ]
                            },
                         {
                            type: "image",
                            value: siloGif4
                         },
                         {
                            type: "image",
                            value: siloGif5
                         },
                         {
                            type: "image",
                            value: siloGif6
                         },
                    ]
                },
                    {
                    image: { regularImage: brush, smallImage: brushSmall },
                    name: "brush",
                    additionalInfo: [
                        {
                            type: "title",
                            value: {
                                headline: "DUSTPAN AND BRUSH",
                                description: "Dirt is a rough unpleasant matter which we want to get rid of it as soon as possible. The brush that I’ve designed is my attempt to bring some elegance and gentleness to the cleaning process."
                            }
                        },
                        {
                            type: "images",
                            value: [{id: "1", img: brush1}, {id: "2", img: brush2}, {id: "3", img: brush3}, {id: "4", img: brush4}, {id: "5", img: brush5}, {id: "6", img: brush6}]
                        }
                    ]
                },
                    {
                        image: { regularImage: stools, smallImage: stoolsSmall },
                        name: "stools",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "STOOLS",
                                description: "A series of wall stools.\n" +
                                    "During my final project in Shenkar, I created a series of stools that interact with the edges of the room and invite the seater to take a position of a side observant.\n"
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
                        image: { regularImage: chair, smallImage: chairSmall },
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
                        image: { regularImage: stool, smallImage: stoolSmall },
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
                        image: { regularImage: bowl, smallImage: bowlSmall },
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
                        image: { regularImage: kettle, smallImage: kettleSmall },
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
                        image: { regularImage: toaster, smallImage: toasterSmall },
                        name: "toaster",
                        additionalInfo: null
                    },
                    {
                        image: { regularImage: headphons, smallImage: headphons },
                        name: "headphons",
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
