import React from 'react';
import {useRef, useLayoutEffect, useState} from 'react'
import './scrolling-floater-block.css'


function ScrollingFloaterBlock(props) {
    // eslint-disable-next-line no-useless-constructor
    const floaterPlaceHolder = useRef(null);
    const floater = useRef(null);
    const [floaterStyle, setFloaterStyle] = useState({top: 0});

    function scrollingCallBack() {
        let placeHolderBoundingClientRect = floaterPlaceHolder.current.getBoundingClientRect();
        let viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


        let isTopOfPlaceHolderInsideOrUnderViewPort = placeHolderBoundingClientRect.top >= 0;
        let isEndOfPlaceHolderOverViewPort = placeHolderBoundingClientRect.height + placeHolderBoundingClientRect.top <= 0;

        let isEndOfPlaceHolderInsideViewPort = !isEndOfPlaceHolderOverViewPort &&
            (placeHolderBoundingClientRect.height + placeHolderBoundingClientRect.top - viewPortHeight <= 0);

        let newFloaterTopValue = 0;
        if (isTopOfPlaceHolderInsideOrUnderViewPort) {
            newFloaterTopValue = 0;
        } else if (isEndOfPlaceHolderOverViewPort || isEndOfPlaceHolderInsideViewPort) {
            newFloaterTopValue = placeHolderBoundingClientRect.height - floater.current.getBoundingClientRect().height;
        } else {
            newFloaterTopValue = Math.abs(placeHolderBoundingClientRect.top);
        }

        setFloaterStyle({top: newFloaterTopValue});
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollingCallBack);
        return () => window.removeEventListener('scroll', scrollingCallBack)
    });

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
                                <div className="more" onClick={value.clickCallback}> more </div>
                            </div>);
                })
        }
    }

    return (
        <div className="scrolling-floater-block" name={props.value.name}>
            <div className="scrolling-floater-placeholder" ref={floaterPlaceHolder}>
                <div className="scrolling-floater" ref={floater} style={floaterStyle}>
                    <div className="container">
                        <div className="title"> {props.value.name}</div>
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