import React from 'react';
import {useRef, useLayoutEffect, useState} from 'react'
import './scrolling-floater-block.css'


function ScrollingFloaterBlock(props) {
    // eslint-disable-next-line no-useless-constructor
    const floaterPlaceHolder = useRef(null);
    const floater = useRef(null);
    const [floaterStyle, setFloaterStyle] = useState({top: 0});

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
                    let imageStyle = {
                        "backgroundImage": 'url(' + value.image + ')'
                    };
                    return (<div className="image" key={value.name} style={imageStyle} >
                                <div className="more" onClick={() => value.clickCallback(value.additionalInfo)}> more </div>
                            </div>);
                })
        }
    }

    return (
        <div className="scrolling-floater-block" name={props.value.name}>
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


    export default ScrollingFloaterBlock;