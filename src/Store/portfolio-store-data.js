import React from 'react';
import brush from '../Images/brush.jpg'
import bowl from '../Images/Bowl.jpg'
import chair from '../Images/chair.jpg'
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
import siloExploded from '../Images/silo/images/exploded-view.jpg'

import brushSmall from '../Images/smallImages/brush.jpg'
import bowlSmall from '../Images/smallImages/bowl.jpg'
import chairSmall from '../Images/smallImages/chair.jpg'
import kettleSmall from '../Images/smallImages/kettel.jpg'
import stoolSmall from '../Images/smallImages/stool.jpg'
import stoolsSmall from '../Images/smallImages/stools.jpg'
import toasterSmall from '../Images/smallImages/toaster.jpg'
import siloSmall from '../Images/smallImages/silo.jpg'

import menuIcon1 from '../Images/menuIcons/menu-icon (1).svg'
import menuIcon2 from '../Images/menuIcons/menu-icon (2).svg'
import menuIcon3 from '../Images/menuIcons/menu-icon (3).svg'
import menuIcon4 from '../Images/menuIcons/menu-icon (4).svg'
import menuIcon5 from '../Images/menuIcons/menu-icon (5).svg'

export const portfolioData = {
    headline: "Klil Horesh",
    description: "Industrial Designer",
    logo: logo,
    blocks: [{
        name: "about",
        containerStyle:{ "backgroundColor" :  "#212121"},
        textStyle: {"color" : "white"},
        content: {
            contentType: "text",
            value: (
                <div>
                    <p style={{"fontSize": "3vh", "fontFamily": "'SourceSans-Bold',serif", "marginTop":"0vh"}}> My name is klil, I am a designer from Israel living in Tel aviv. </p>
                    <p style={{"fontSize": "2.8vh"}} >I aspire to make my design user centered, associated with
                          humane feelings, associated with human experiences and effective by observing the
                          relationship between people and objects.
                    </p>
                    <br/>
                    <br/>
                    <div style={{"display": "flex", "flexDirection": "column", "fontSize": "2.5vh"}}>

                        <div style={{"minWidth": "100px", "color": "#B0B0B0", "fontFamily": "'PTSerif-Regular',serif", "marginBottom": "10px"}}> Education </div>
                        <div>
                            <div style={{"marginBottom": "1vh"}}> <div  style={{"fontFamily": "'SourceSans-Bold',serif"}}> B.Des Of Industrial Design Shenkar College of Engineering and Design </div> <div> Tel Aviv 2012 - 2016 </div> </div>
                            <div style={{"fontFamily": "'SourceSans-Bold',serif"}} > Exchange Student Universität der Künste </div> <div> Berlin 2015  </div>
                        </div>
                    </div>
                    <br/>
                    <div style={{"display": "flex", "flexDirection": "column", "fontSize": "2.5vh"}}>
                        <div style={{"minWidth": "100px", "color": "#B0B0B0", "fontFamily": "'PTSerif-Regular',serif", "marginBottom": "15px"}}> Skills </div>
                        <div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> CAD Modeling </span> Solidworks, Rhinoceros 3D  </div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Rendering </span>  Keyshot  </div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Adobe </span> Illustrator, Photoshop, InDesign </div>
                            <div style={{"marginBottom": "1vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Model Making </span> </div>
                            <div> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Hand Sketching </span> </div>
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "center", "fontSize": "2.5vh", "marginTop": "5vh"}}>  <a href={"/docs/CV.pdf"} target="_blank" rel="noopener noreferrer" style={{ "border": "solid 0.5px black", "padding": "0 10px", "cursor": "pointer", "textDecoration": "none"}}> See My full CV </a> </div>
                </div>)
        },
        icon: menuIcon1
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
                                type: "group",
                                value: [{
                                    type: "title",
                                    value: {
                                        headline: "Silo",
                                        description: "Simple vacuum-sealing container system for the home kitchen that keeps food fresher, longer."
                                    }
                                },
                                    {
                                        type: "link-button",
                                        value: {
                                            url: "https://www.heysilo.com/",
                                            text: "Launch Website"
                                        }
                                    }]
                            }
                         ,
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
                            value: siloGif1,
                            customStyle: {"marginBottom": "6vh"}
                        },
                         {
                            type: "image",
                            value: siloGif2,
                            customStyle: {"marginBottom": "6vh"}
                        },
                         {
                                type: "image",
                                value: siloGif3,
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
                                        description: "",
                                    },
                                    customStyle: {"marginLeft": "8.5vw"}
                                },
                                    {
                                        type: "image",
                                        value: siloEarlyExploration,
                                        customStyle: {"width": "82vw"}
                                    }
                                ]
                            },
                         {
                            type: "image",
                            value: siloGif4,
                             customStyle: {"width": "78vw"}
                         },
                         {
                            type: "image",
                            value: siloGif5,
                             customStyle: {"width": "78vw"}
                         },
                         {
                            type: "image",
                            value: siloGif6,
                            customStyle: {"width": "78vw"}
                         },
                         {
                            type: "image",
                            value: siloExploded,
                            customStyle: {"width": "78vw"}
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
                    // {
                    //     image: { regularImage: headphons, smallImage: headphons },
                    //     name: "headphons",
                    //     additionalInfo: null
                    // }
                ]
            },
            icon: menuIcon2
        },
        {
            name: "contact",
            containerStyle:{ "backgroundColor" :  "#212121"},
            textStyle: {"color" : "white"},
            content: {
                contentType: "text",
                value: (<div style={{"display": "flex", "flexDirection": "column", "justifyContent": "center","alignItems": "flex-start"}}>
                            <div style={{"fontSize": "8vh", "fontFamily": "PTSerif-Regular, serif", "marginBottom": "40px"}}> Lets's talk.</div>
                            <div style={{"marginBottom": "5px", "display": "flex", "alignItems": "center"}}><img style={{"width": "2.6vh", "marginRight": "10px"}} alt="" src={menuIcon4}/> <a href="mailto:klilhoreshg@gmail.com" style={{"text-decoration": "none", "fontSize": "2.6vh"}}>klilhoreshg@gmail.com</a></div>
                            <div style={{"marginBottom": "5px", "display": "flex", "alignItems": "center"}}> <img style={{"width": "2.6vh", "marginRight": "10px"}} alt="" src={menuIcon3}/> <a href="tel:+972526053642"style={{"whiteSpace": "pre", "text-decoration": "none", "fontSize": "2.6vh"}}>+972 52 6053642 </a></div>
                            <div style={{"display": "flex", "alignItems": "center", "fontSize": "2.6vh"}}> <img style={{"width": "2.6vh", "marginRight": "10px", "top": "20px"}} alt="" src={menuIcon5}/> Tel Aviv, Israel </div>
                        </div>)
            },
            icon: menuIcon3
        }
    ]
};
