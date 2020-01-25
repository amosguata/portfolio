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
        return workAdditionalInfo.map((additionalInfoItem, index) => {
            switch (additionalInfoItem.type) {
                case "title":
                    return (<div className="title" key={storedWork.name + "-title" + index.toString() } >
                        <div className="title-headline" key={storedWork.name + "-title-headline" + index.toString()}> {additionalInfoItem.value.headline} </div>
                        <div className="title-description" key={storedWork.name + "-description" + index.toString()}> {additionalInfoItem.value.description} </div>
                    </div>);
                case "subTitle":
                    return (<div className="subtitle" key={storedWork.name + "-subtitleTitle" + index.toString()}>
                        <div className="subtitle-headline" key={storedWork.name + "-subtitle-headline" + index.toString()}> {additionalInfoItem.value.headline} </div>
                        <div className="subtitle-description" key={storedWork.name + "-subtitle-description" + index.toString()}> {additionalInfoItem.value.description} </div>
                    </div>);
                case "image":
                    return (<img className="image" key={storedWork.name + "-image" + index.toString()} src={additionalInfoItem.value} alt="" >
                            </img>);
                case "images":
                    let items =  additionalInfoItem.value.map(image => <img alt="" key={storedWork.name + "-" + image.id} src={image.img} className={"carousel-cell"}/>);

                    return (<Flickity className="flicktiy-carousel" key={storedWork.name + "-carousel" + index.toString()} options={{cellAlign: 'left', prevNextButtons: false, pageDots: false, reloadOnUpdate: true}}>
                                    {items}
                            </Flickity>);
                default:
                    return (<div> </div>);
            }
        });
    }

    return (<div>
                <ScrollToTopOnMount/>
                <div className="additional-info-content">
                    {renderModalBody()}
                </div>
            </div>)
}

export default  withRouter(AdditionalInfo);