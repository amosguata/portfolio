import React from 'react';
import {useEffect} from 'react'
import './additional-info.css'
import {portfolioStore} from '../../Store/portfolio-store'
import { withRouter } from "react-router";
import ScrollToTopOnMount from "../scroll-to-top/scroll-to-top";
import ImageGallery from '../image-gallary/image-gallary';
import LoadingBar from 'react-top-loading-bar';
import NextProject from "../next-work/next-work";
import Footer from "../footer/footer";

function AdditionalInfo(props) {
    let loadingBar = null;
    let works = portfolioStore.getState().blocks.find(block => block.name === "work");
    let storedWork = works.content.value.find(work => work.name === props.match.params.workName);
    let workAdditionalInfo = storedWork.additionalInfo;

    // window.addEventListener('load', () => {
    //     console.log("now!");
    //     loadingBar.complete()
    // });

    // useEffect(() => {
    //     loadingBar.continuousStart(0);
    // });

    function renderModalBody() {
        return workAdditionalInfo.map((additionalInfoItem, index) => {
            return renderSpecificIElement(additionalInfoItem.type, additionalInfoItem.value, additionalInfoItem.customStyle ,index);
        });
    }

    function renderSpecificIElement (elementType, elementValue, elementCustomStyle, id) {
        elementCustomStyle = elementCustomStyle || {};
        switch (elementType) {
            case "title":
                return (<div className="title" key={"title-" + id.toString() } style={elementCustomStyle} >
                    <div className="title-headline" key={"title-headline-" + id.toString()}> {elementValue.headline} </div>
                    <div className="title-description" key={"description-" + id.toString()}> {elementValue.description} </div>
                </div>);
            case "subTitle":
                return (<div className="subtitle" key={"subtitleTitle-" + id.toString()} style={elementCustomStyle}>
                    <div className="subtitle-headline" key={"subtitle-headline-" + id.toString()} > {elementValue.headline} </div>
                    <div className="subtitle-description" key={"subtitle-description-" + id.toString()} > {elementValue.description} </div>
                </div>);
            case "image":
                return (<img className="image" key={"image-" + id.toString()} src={elementValue} alt=""  style={elementCustomStyle}>
                </img>);
            case "images":
                return (<ImageGallery images={elementValue} id={id} key={"image-gallary" + id.toString()} style={elementCustomStyle}> </ImageGallery>);
            case "group":
                let groupItems =  elementValue.map((element, index) => renderSpecificIElement(element.type, element.value, element.customStyle ,id + "-" + index));
                return <div className="group" key={"group-" + id} style={elementCustomStyle}> {groupItems} </div>;
            case "link-button":
                return (<div className={"button-link-container"} key={"button-" + id.toString()}> <a className={"button-link"} target="_blank" href={elementValue.url}> {elementValue.text} </a></div>);
            default:
                return (<div> </div>);
        }
    }

    function pageFinishedLoading() {

    }

    return (<div>
                <ScrollToTopOnMount/>
                <LoadingBar height={3} color='black' onRef={ref => (loadingBar = ref)} />
                <div className="additional-info-content">
                    {renderModalBody()}
                </div>
                <NextProject currentWorkName={storedWork.name}  />
                <Footer> </Footer>
            </div>)
}

export default  withRouter(AdditionalInfo);