import React from 'react';
import {useRef, useLayoutEffect, useState} from 'react'
import './scrolling-floater-block.css'
import { withRouter } from "react-router";
import useWindowSize from "../../Hooks/windows-size";

function ScrollingFloaterBlock(props) {
    // eslint-disable-next-line no-useless-constructor
    const floaterPlaceHolder = useRef(null);
    const floater = useRef(null);
    const [floaterStyle, setFloaterStyle] = useState({top: 0});
    const windowsSize = useWindowSize();
    const BREAKING_BLOCK_THRESHOLD = 800;

    function scrollingCallBack() {

        let viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let placeHolderBoundingClientRect = floaterPlaceHolder.current.getBoundingClientRect();

        let isTopOfPlaceHolderInsideOrUnderViewPort = placeHolderBoundingClientRect.top >= 0;
        let isEndOfPlaceHolderOverViewPort = placeHolderBoundingClientRect.height + placeHolderBoundingClientRect.top <= 0;

        let isEndOfPlaceHolderInsideViewPort = !isEndOfPlaceHolderOverViewPort &&
            (placeHolderBoundingClientRect.height + placeHolderBoundingClientRect.top - viewPortHeight <= 0);

        let newFloaterStyle = {};
        if (isTopOfPlaceHolderInsideOrUnderViewPort) {
            newFloaterStyle.top = 0;
        } else if (isEndOfPlaceHolderOverViewPort || isEndOfPlaceHolderInsideViewPort) {
            newFloaterStyle.top = placeHolderBoundingClientRect.height - floater.current.getBoundingClientRect().height;
        } else {
            newFloaterStyle = { position: 'fixed', top: 0, width: placeHolderBoundingClientRect.width };
        }

        setFloaterStyle(newFloaterStyle);
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollingCallBack);
        return () => window.removeEventListener('scroll', scrollingCallBack)
    }, []);

    function renderContent(content) {
        // eslint-disable-next-line default-case
        switch (props.value.content.contentType) {
            case "text":
                return <div className="text"> {props.value.content.value} </div>;
            case "clickableImages":
                return props.value.content.value.map(value => {
                    return (<div className={"image"} key={value.name}>
                                <picture>
                                    <source media={"(orientation: portrait)"} srcSet={value.image.smallImage}/>
                                    <img src={value.image.regularImage} alt={""} />
                                </picture>
                           </div>);
                })
        }
    }

    return (
        <div className={"scrolling-floater-block " + (windowsSize.width <= BREAKING_BLOCK_THRESHOLD ? "break" : "")} name={props.value.name}>
            <div className="scrolling-floater-placeholder" ref={floaterPlaceHolder}>
                <div className="scrolling-floater" ref={floater} style={floaterStyle}>
                    <div className="container" style={props.value.containerStyle}>
                        <div className="title" style={props.value.textStyle}> {props.value.name}</div>
                    </div>
                </div>
            </div>

            <div className="scroll-section">
                {renderContent()}
            </div>
        </div>
    );
}


export default withRouter(ScrollingFloaterBlock);