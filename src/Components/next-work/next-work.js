import React from 'react';
import {portfolioStore} from '../../Store/portfolio-store'
import {withRouter} from "react-router-dom";
import './next-work.css'

function NextProject(props) {
    let works = portfolioStore.getState().blocks
        .find(block => block.name === "work");

    let nextWork = works.content.value.filter(workContent => workContent.additionalInfo)
                                        .find((work, index, works) => {
                                        const prevWork = works[index - 1 <= -1 ?  works.length -1 : index - 1];
                                        return prevWork.name === props.currentWorkName;
                                    });

    function redirectToNextWork() {
        props.history.push('/additional-info/' + nextWork.name);
    }

    return (<div className="next-project" >
                <span className="work-name" onClick={redirectToNextWork}> {nextWork.name} </span>
                <br/>
                <span className="caption" onClick={redirectToNextWork}> Next Project </span>
            </div>)
}

export default withRouter(NextProject);