import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import './additional-info.css'
import AliceCarousel from "react-alice-carousel"
import {portfolioStore} from '../../Store/portfolio-store'
import { withRouter } from "react-router";

function AdditionalInfo(props) {
    const handleOnDragStart = (e) => e.preventDefault();
    const responsive = {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        750: {
            items: 3
        },
        1024: {
            items: 5
        },
        1280: {
            items: 5
        },
        1400: {
            items: 5
        },
        1440: {
            items: 5
        },
        1600: {
            items: 5
        },
        1920: {
            items: 5
        },
        2048: {
            items: 5
        },
        10000: {
            items: 5
        }
    };

    function renderModalBody() {
        let works = portfolioStore.getState().blocks.find(block => block.name === "work");
        debugger;
        let workAdditionalInfo = works.content.value.find(work => work.name === props.match.params.workName).additionalInfo;
        return workAdditionalInfo.map((work) => {
            switch (work.type) {
                case "title":
                    return (<div className="title" >
                        <div className="title-headline" key="title-headline"> {work.value.headline} </div>
                        <div className="title-description" key="description"> {work.value.description} </div>
                    </div>);
                case "subTitle":
                    return (<div className="subtitle">
                        <div className="subtitle-headline" key="subtitle-headline"> {work.value.headline} </div>
                        <div className="subtitle-description" key="subtitle-description"> {work.value.description} </div>
                    </div>);
                case "image":
                    return (<img className="image" src={work.value} alt="" >
                            </img>);
                case "images":
                    let items =  work.value.map(image => <img alt="" src={image} onDragStart={handleOnDragStart}
                                                                    className={"carousel-image"}/>);
                    return (<div >
                        <AliceCarousel mouseTrackingEnabled className={"carousel"} responsive={responsive}
                                       buttonsDisabled={true} dotsDisabled={true} items={items}>
                        </AliceCarousel>
                    </div>);
                default:
                    return (<div> </div>);
            }
        });
    }

    return (<div>
        <div className={"header"}>
            <label className="back" onClick={() => props.history.push('/')}> {"<--"} </label>

        </div>
        <div className="content">
            {renderModalBody()}
        </div>
    </div>)
}

export default  withRouter(AdditionalInfo);