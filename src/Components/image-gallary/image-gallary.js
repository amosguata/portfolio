import React from 'react';
import './image-gallary.css';
import useWindowSize from '../../Hooks/windows-size.js';
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

function ImageGallery(props) {
    const MINUMUN_SCREEN_SIZE_FOR_GALLARY = 750;


    function renderImageGallery() {
        let items =  props.images.map(image => <img alt="" key={ "gallery-image-" + image.id} src={image.img} className={"carousel-cell"}/>);

        return (<Flickity className="flicktiy-carousel" key={"carousel-" + props.id.toString()} options={{cellAlign: 'left', prevNextButtons: false, pageDots: false, reloadOnUpdate: true}}>
            {items}
        </Flickity>);
    }

    function renderVerticalImage() {
        let items =  props.images.map(image => <img alt="" key={ "vertical-images" + image.id} src={image.img} className={"vertical-image"}/>);

        return (<div className="vertical-images" key={"vertical-images" + props.id}> { items } </div>);
    }

    let windowSize = useWindowSize();
    const isViewPortSizeUnderMinimum = windowSize.width <= MINUMUN_SCREEN_SIZE_FOR_GALLARY;

    return (isViewPortSizeUnderMinimum ? renderVerticalImage() : renderImageGallery())
}

export default  ImageGallery;