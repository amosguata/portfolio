import React from 'react';
import {Link} from "react-scroll";
import {withRouter} from "react-router-dom";

function NavigationOptions(props) {
    return (<ul className={props.styleIdentifier}>
        {
            props.navigationOptions.map(block =>
                <li className="menuItem" key={block.name}>
                    { block.icon ? block.icon : null }
                    {   block.link ? <span onClick={() => props.history.push(block.link)}> {block.name} </span> :
                        <Link to={block.name} smooth={true} offset={0} duration={1000}>
                        {block.name}
                        </Link>
                    }
                </li>
            )
        }
    </ul>)
}


export default withRouter(NavigationOptions);