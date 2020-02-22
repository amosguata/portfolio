import React from 'react';
import {Link} from "react-scroll";
import {portfolioStore} from '../../Store/portfolio-store'

function NavigationOptions(props) {
    return (<ul className={props.styleIdentifier}>
        {
            props.navigationOptions.map(block =>
                <li key={block.name}>
                    { block.icon ? <img className={"icon"} src={block.icon} alt=""/> : null }
                    <Link to={block.name} smooth={true} offset={0} duration={500}>
                        { block.name }
                    </Link>
                </li>
            )
        }
    </ul>)
}


export default NavigationOptions;