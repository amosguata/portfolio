import React from 'react';
import brush from '../Images/brush.jpg'
import bowl from '../Images/Bowl.jpg'
import chair from '../Images/chair.jpg'
import kettle from '../Images/kettle.jpg'
import stool from '../Images/stool.jpg'
import stools from '../Images/stools.jpg'
import toaster from '../Images/toaster.jpg'
import earbuds from '../Images/headphone.jpg'
import silo from '../Images/silo.jpg'
import logo from '../Images/logo/logo-black.png'
import brush1 from '../Images/brush/brush (1).jpg'
import brush2 from '../Images/brush/brush (2).jpg'
import brush3 from '../Images/brush/brush (3).jpg'
import brush4 from '../Images/brush/brush (4).jpg'
import brush5 from '../Images/brush/brush (5).jpg'

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


import siloGif1 from '../Images/silo/gifs/gif (1).gif'
import siloGif2 from '../Images/silo/gifs/gif (2).gif'
import siloGif3 from '../Images/silo/gifs/gif (3).gif'
import siloGif4 from '../Images/silo/gifs/gif (4).png'
import siloGif5 from '../Images/silo/gifs/gif (5).png'
import siloGif6 from '../Images/silo/gifs/gif (6).png'

import siloOpeningImage from '../Images/silo/images/opening.jpg'
import siloDesignGuidlines from '../Images/silo/images/design-guidelines.jpg'
import siloEarlyExploration from '../Images/silo/images/early-exploration.jpg'
import siloExploded from '../Images/silo/images/exploded-view.jpg'
import siloPatternDesign from '../Images/silo/images/pattern-design.jpg'

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

import earbuds1 from '../Images/earbuds/earbuds (1).jpg'
import earbuds2 from '../Images/earbuds/earbuds (2).jpg'
import earbuds3 from '../Images/earbuds/earbuds (3).jpg'
import earbuds4 from '../Images/earbuds/earbuds (4).jpg'


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
                    <div style={{"fontSize": "2.5vh", "fontFamily": "'SourceSans-Bold',serif", "marginTop":"0vh", "marginBottom":"0.5vh"}}> Hi! My name is Klil, I am a designer from Israel living in Tel-Aviv. </div>
                    <div style={{"fontSize": "2.5vh"}} >I aspire to create design which is user centered and associated with human feelings and experiences. I take special care to examine the relationship between people and the objects around them in order to better understand how to use the great power of design more effectively.
                    </div>
                    <br/>
                    <br/>
                    <div style={{"display": "flex", "flexDirection": "column", "fontSize": "2.5vh", "marginBottom": "3vh"}}>

                        <div style={{"minWidth": "100px", "color": "#B0B0B0", "fontFamily": "'PTSerif-Regular',serif", "marginBottom": "1.5vh"}}> Education </div>
                        <div>
                            <div style={{"marginBottom": "1vh"}}> <div  style={{"fontFamily": "'SourceSans-Bold',serif"}}> B.Des Of Industrial Design Shenkar College of Engineering and Design </div> <div> Tel Aviv 2012 - 2016 </div> </div>
                            <div style={{"fontFamily": "'SourceSans-Bold',serif"}} > Exchange Student Universität der Künste </div> <div> Berlin 2015  </div>
                        </div>
                    </div>
                    <div style={{"display": "flex", "flexDirection": "column", "fontSize": "2.5vh"}}>
                        <div style={{"minWidth": "100px", "color": "#B0B0B0", "fontFamily": "'PTSerif-Regular',serif", "marginBottom": "1.5vh"}}> Skills </div>
                        <div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> CAD Modeling </span> Solidworks, Rhinoceros 3D  </div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Rendering </span>  Keyshot  </div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Adobe </span> Illustrator, Photoshop, InDesign </div>
                            <div style={{"marginBottom": "0.5vh"}}> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Model Making </span> </div>
                            <div> <span  style={{"fontFamily": "'SourceSans-Bold',serif"}}> Hand Sketching </span> </div>
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "center", "fontSize": "16px", "marginTop": "5vh"}}>  <a href={"/docs/CV.pdf"} target="_blank" rel="noopener noreferrer" style={{ "border": "solid 0.5px black", "padding": "8px 20px", "cursor": "pointer", "textDecoration": "none"}}> My full CV </a> </div>
                </div>)
        },
        icon: <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><title>ICONS OUTLINE</title><g id="Layer_1" data-name="Layer 1"><path d="M40,9.45a15.3,15.3,0,1,1-15.3,15.3A15.317,15.317,0,0,1,40,9.45m0-7.7a23,23,0,1,0,23,23,23,23,0,0,0-23-23Z"/><path d="M30.2,59.635a.885.885,0,0,1,.237.033,36.3,36.3,0,0,0,19.125,0,.9.9,0,0,1,.238-.033.721.721,0,0,1,.637.356l4.008,7.325a.65.65,0,0,1,.036.595.759.759,0,0,1-.5.455,45.864,45.864,0,0,1-27.969,0,.759.759,0,0,1-.5-.455.647.647,0,0,1,.036-.595l4.008-7.325a.721.721,0,0,1,.637-.356m19.6-7.7a8.584,8.584,0,0,0-2.266.3,28.6,28.6,0,0,1-15.068,0,8.579,8.579,0,0,0-2.266-.3,8.4,8.4,0,0,0-7.392,4.36L18.8,63.619A8.438,8.438,0,0,0,23.67,75.7a53.563,53.563,0,0,0,32.66,0A8.437,8.437,0,0,0,61.2,63.619L57.192,56.3a8.4,8.4,0,0,0-7.392-4.36Z"/></g></svg>
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
                                    description: "Food waste is a global epidemic. " +
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
                            value: [{id: "1", img: silo1}, {id: "2", img: silo2}, {id: "3", img: silo3}, {id: "4", img: silo4}, {id: "5", img: silo5}, {id: "6", img: silo6}]
                        },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "The Problem",
                                    description: "Food waste is a global epidemic. " +
                                        "According to a recent study by Boston Consulting Group, each year 1.6 billion tons of food" +
                                        "worth about $1.2 trillion are lost or go to waste. Most of this waste happens at the" +
                                        "consumer level with more than 40% of household food going bad."
                                }
                            },
                         {
                                type: "subTitle",
                                value: {
                                    headline: "The Solution",
                                    description: "Simple vacuum-sealing container system that is easy to use on a daily basis and " +
                                        "encourages the user engagement. A product that integrates with the kitchen environment " +
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
                                },
                                    {
                                        type: "image",
                                        value: siloEarlyExploration,
                                        customStyle: {"width": "82vw"}
                                    }
                                ]
                            },
                         {
                            type: "group",
                            name: "Detailed exploration",
                            value: [
                                {
                                    type: "subTitle",
                                    value: {
                                        headline: "Detailed Explorations",
                                        description: "",
                                    },
                                },
                                {
                                    type: "image",
                                    value: siloGif4,
                                    customStyle: {"width": "80vw", marginBottom: "5vh"}
                                },
                                {
                                    type: "image",
                                    value: siloGif5,
                                    customStyle: {"width": "80vw", marginBottom: "5vh"}
                                },
                                {
                                    type: "image",
                                    value: siloGif6,
                                    customStyle: {"width": "80vw"}
                                }
                            ]
                        },
                         {
                                type: "group",
                                name: "Mastering Complex Assembly",
                                value: [
                                    {
                                        type: "subTitle",
                                        value: {
                                            headline: "Mastering Complex Assembly",
                                            description: "",
                                        },
                                    },
                                    {
                                        type: "image",
                                        value: siloExploded,
                                        customStyle: {"width": "78vw"}
                                    }
                                ]
                            },
                        {
                            type: "image",
                            value: siloPatternDesign
                        }
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
                        image: { regularImage: earbuds, smallImage: earbuds },
                        name: "Earbuds",
                        additionalInfo: [{
                            type: "title",
                            value: {
                                headline: "Earbuds",
                                description: "The action of inserting the earphone into the ear is the focus in this project. I created a soft welcoming surface to lead  the finger while applying the earbud."
                            }
                        },
                            {
                                type: "images",
                                value: [{id: "1", img: earbuds1}, {id: "2", img: earbuds2}, {id: "3", img: earbuds3}, {id: "4", img: earbuds4}]
                            }
                        ]
                    },
                    {
                        image: { regularImage: toaster, smallImage: toasterSmall },
                        name: "toaster",
                        additionalInfo: null
                    }
                ]
            },
            icon: <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 88"><title>ICONS OUTLINE</title><g id="Layer_1" data-name="Layer 1"><path d="M31.3,56.865a9.6,9.6,0,0,1,1.738.159l.358.081a9.873,9.873,0,0,1,4.12,2.04c3.779,3.1,4.4,8.969,1.409,13.359a11.951,11.951,0,0,1-6.417,4.982,19.663,19.663,0,0,1-4.942.627,27.162,27.162,0,0,1-10.89-2.546,19.866,19.866,0,0,0,3.408-6.07l.227-.67a75.79,75.79,0,0,1,2.636-7.186,9.553,9.553,0,0,1,5.987-4.481,9.694,9.694,0,0,1,2.366-.295m0-7.7A17.412,17.412,0,0,0,16.24,57.854c-.96,1.67-3.01,7.89-3.44,9.14a13.065,13.065,0,0,1-5.52,6.7,3.348,3.348,0,0,0,.09,5.66c8,4.876,14.73,6.459,20.2,6.459a27.229,27.229,0,0,0,7.085-.929,19.707,19.707,0,0,0,10.64-8.05c5.13-7.53,4.15-17.86-2.89-23.64a17.572,17.572,0,0,0-7.31-3.6l-.1-.03a17.294,17.294,0,0,0-3.692-.4Z"/><path d="M59.217,9.889a1.3,1.3,0,0,1,.665.182l5.978,3.453a1.35,1.35,0,0,1,.494,1.841L51.132,41.73a1.355,1.355,0,0,1-1.176.676,1.3,1.3,0,0,1-.666-.182l-5.978-3.452a1.348,1.348,0,0,1-.494-1.842L58.039,10.566a1.357,1.357,0,0,1,1.178-.677m0-7.7a9.046,9.046,0,0,0-7.845,4.525L36.15,33.08a9.047,9.047,0,0,0,3.312,12.36l5.978,3.452A9.043,9.043,0,0,0,57.8,45.58L73.022,19.215A9.048,9.048,0,0,0,69.71,6.855L63.732,3.4A8.994,8.994,0,0,0,59.216,2.19Z"/></g></svg>
        },
        {
            name: "contact",
            containerStyle:{ "backgroundColor" :  "#212121"},
            textStyle: {"color" : "white"},
            content: {
                contentType: "text",
                value: (<div style={{"display": "flex", "flexDirection": "column", "justifyContent": "center","alignItems": "flex-start"}}>
                            <div style={{"fontSize": "8vh", "fontFamily": "PTSerif-Regular, serif", "marginBottom": "40px"}}> Lets's talk.</div>
                            <div style={{"marginBottom": "5px", "display": "flex", "alignItems": "center"}}><img style={{"width": "2.6vh", "marginRight": "10px"}} alt="" src={menuIcon4}/> <a href="mailto:klilhoreshg@gmail.com" style={{"textDecoration": "none", "fontSize": "2.6vh"}}>klilhoreshg@gmail.com</a></div>
                            <div style={{"marginBottom": "5px", "display": "flex", "alignItems": "center"}}> <img style={{"width": "2.6vh", "marginRight": "10px"}} alt="" src={menuIcon3}/> <a href="tel:+972526053642"style={{"whiteSpace": "pre", "textDecoration": "none", "fontSize": "2.6vh"}}>+972 52 6053642 </a></div>
                            <div style={{"display": "flex", "alignItems": "center", "fontSize": "2.6vh"}}> <img style={{"width": "2.6vh", "marginRight": "10px", "top": "20px"}} alt="" src={menuIcon5}/> Tel Aviv, Israel </div>
                        </div>)
            },
            icon: <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><title>ICONS OUTLINE</title><g id="Layer_1" data-name="Layer 1"><path d="M53.527,31.049a24.557,24.557,0,0,1,14.991,4.372c8.474,5.753,11.062,15.255,7,24.633a17.619,17.619,0,0,0-1.088,6.035c-.321,6.486-3.965,8.945-10.041,7.037a23.621,23.621,0,0,0-8.042-.943c-9.154.434-17.23-1.772-23.046-9.253-6.393-8.223-5.063-19.076,2.88-25.851A24.749,24.749,0,0,1,53.527,31.049ZM66.092,64.715c1.02-2.977,2.159-6.309,3.3-9.639,1.4-4.087.435-7.707-2.3-10.884-6.484-7.533-20.237-7.737-27-.446-4.431,4.775-4.414,11.056.151,15.736,4.073,4.175,9.2,5.462,14.877,5.259C58.892,64.606,62.672,64.715,66.092,64.715Z"/><path d="M15.261,58.437c1.864-.618,3.188-1,4.473-1.494a3.539,3.539,0,0,1,4.879,1.911c1.073,2.156.1,3.864-1.878,4.83a27.881,27.881,0,0,1-5.85,2.181C12,67,7.553,63.971,7.638,58.947c.1-5.716-1.33-10.758-3.4-16.031C.865,34.348,2.9,26.122,8.522,18.961,21.66,2.229,50.74,1.981,64.31,18.387c3.019,3.65,3.391,5.843,1.3,7.625-2.05,1.743-3.905,1.02-7.085-2.761C48.293,11.094,26.672,10.459,15.791,22c-5.775,6.123-7.4,13.813-3.5,20.711A20.953,20.953,0,0,1,15.1,55.02,32.454,32.454,0,0,0,15.261,58.437Z"/></g></svg>
        }
    ]
};
