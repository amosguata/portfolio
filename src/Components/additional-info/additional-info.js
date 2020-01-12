import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import './additional-info.css'
import AliceCarousel from "react-alice-carousel"
import {portfolioStore} from '../../Store/portfolio-store'
import { withRouter } from "react-router";
import ScrollToTopOnMount from "../scroll-to-top/scroll-to-top";

function AdditionalInfo(props) {
    const handleOnDragStart = (e) => e.preventDefault();
    const MAX_NUMBER_OF_PICTURES = 3;
    const responsive = {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        750: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1024: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1280: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1400: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1440: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1600: {
            items: MAX_NUMBER_OF_PICTURES
        },
        1920: {
            items: MAX_NUMBER_OF_PICTURES
        },
        2048: {
            items: MAX_NUMBER_OF_PICTURES
        },
        10000: {
            items: MAX_NUMBER_OF_PICTURES
        }
    };

    function renderModalBody() {
        let works = portfolioStore.getState().blocks.find(block => block.name === "work");
        let storedWork = works.content.value.find(work => work.name === props.match.params.workName);
        let workAdditionalInfo = storedWork.additionalInfo;
        return workAdditionalInfo.map((work) => {
            switch (work.type) {
                case "title":
                    return (<div className="title" key={storedWork.name + "-title" } >
                        <div className="title-headline" key={storedWork.name + "-title-headline"}> {work.value.headline} </div>
                        <div className="title-description" key={storedWork.name + "-description"}> {work.value.description} </div>
                    </div>);
                case "subTitle":
                    return (<div className="subtitle" key={storedWork.name + "-subtitleTitle"}>
                        <div className="subtitle-headline" key={storedWork.name + "-subtitle-headline"}> {work.value.headline} </div>
                        <div className="subtitle-description" key={storedWork.name + "-subtitle-description"}> {work.value.description} </div>
                    </div>);
                case "image":
                    return (<img className="image" key={storedWork.name + "-image"} src={work.value} alt="" >
                            </img>);
                case "images":
                    let items =  work.value.map(image => <img alt="" key={storedWork.name + "-" + image.id} src={image.img} onDragStart={handleOnDragStart}
                                                                    className={"carousel-image"}/>);

                    return (<div key={storedWork.name + "-carousel"}>
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
                <ScrollToTopOnMount/>
                <div className="content">
                    {renderModalBody()}
                </div>
            </div>)
}

export default  withRouter(AdditionalInfo);