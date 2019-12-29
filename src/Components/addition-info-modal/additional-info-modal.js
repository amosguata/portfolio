import React from 'react';
import Modal from "react-modal";
import "react-alice-carousel/lib/alice-carousel.css";
import  AliceCarousel from "react-alice-carousel"
import chair from '../../Images/chair.jpg'
import './additional-info-modal.css'
import logo from '../../Images/kh_logo.png'
function AdditionalInfoModal(props) {

    function closeModal() {
        props.onCloseModal();
    }
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

    const modalBackgroundColor = "rgba(255, 255, 255, 1)";

    const customStyles = {
        overlay : {
            "margin": "20px",
            "background-color": modalBackgroundColor,
            "padding-bottom": "10px",
            "padding-left": "10px",
            "padding-right": "10px"
        },
        content: {
            "outline-color": modalBackgroundColor
        }

    };

    function renderModalBody() {
        // return props.content.map((contentItem) => {
        //     console.log(props.content);
        //     switch (contentItem.type) {
        //         case "text":
        //             return (<div> { contentItem.value } </div>);
        //         case "images":
        //
        //             let images = {
        //                 items: contentItem.images.map(image => <img src={image} onDragStart={handleOnDragStart} className={"carousel-image"}/>)
        //             };
        //             return (<div>
        //                         <AliceCarousel mouseTrackingEnabled className={"carousel"} responsive={responsive} buttonsDisabled={true} dotsDisabled={true} items={images}>
        //                         </AliceCarousel>
        //                     </div>)
        //     }
        // });
    }

    return (<Modal isOpen={props.shouldShowModal} className={"additional-info-modal"} style={customStyles}>
                <div className={"header"}>
                    <label onClick={closeModal}> X </label>
                    {renderModalBody()}
                </div>
            </Modal>)
}

export default AdditionalInfoModal;