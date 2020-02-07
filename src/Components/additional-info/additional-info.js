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
            return renderSpecificIElement(additionalInfoItem.type, additionalInfoItem.value, index);
        });
    }
    function renderSpecificIElement (elementType, elementValue, id) {
        switch (elementType) {
            case "title":
                return (<div className="title" key={"title-" + id.toString() } >
                    <div className="title-headline" key={"title-headline-" + id.toString()}> {elementValue.headline} </div>
                    <div className="title-description" key={"description-" + id.toString()}> {elementValue.description} </div>
                </div>);
            case "subTitle":
                return (<div className="subtitle" key={"subtitleTitle-" + id.toString()}>
                    <div className="subtitle-headline" key={"subtitle-headline-" + id.toString()}> {elementValue.headline} </div>
                    <div className="subtitle-description" key={"subtitle-description-" + id.toString()}> {elementValue.description} </div>
                </div>);
            case "image":
                return (<img className="image" key={"image-" + id.toString()} src={elementValue} alt="" >
                </img>);
            case "images":
                let items =  elementValue.map(image => <img alt="" key={ "gallery-image-" + image.id} src={image.img} className={"carousel-cell"}/>);

                return (<Flickity className="flicktiy-carousel" key={"carousel-" + id.toString()} options={{cellAlign: 'left', prevNextButtons: false, pageDots: false, reloadOnUpdate: true}}>
                    {items}
                </Flickity>);
            case "group":
                let groupItems =  elementValue.map((element, index) => renderSpecificIElement(element.type, element.value,id + "-" + index));
                return <div className="group" key={"group-" + id}> {groupItems} </div>
            default:
                return (<div> </div>);
        }
    }

    return (<div>
                <ScrollToTopOnMount/>
                <div className="additional-info-content">
                    {renderModalBody()}
                </div>
            </div>)
}

export default  withRouter(AdditionalInfo);