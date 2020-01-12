import React from 'react';
import './additional-info.css'
import {portfolioStore} from '../../Store/portfolio-store'
import { withRouter } from "react-router";
import ScrollToTopOnMount from "../scroll-to-top/scroll-to-top";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

function AdditionalInfo(props) {

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
                    return (<img className="image carousel-cell" key={storedWork.name + "-image"} src={work.value} alt="" >
                            </img>);
                case "images":
                    let items =  work.value.map(image => <img alt="" key={storedWork.name + "-" + image.id} src={image.img} className={"carousel-cell"}/>);

                    return (<Flickity key={storedWork.name + "-carousel"} options={{cellAlign: 'left', prevNextButtons: false, pageDots: false, reloadOnUpdate: true}}>
                                {items}
                            </Flickity>);
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