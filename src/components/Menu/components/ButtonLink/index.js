import React from 'react';

const ButtonLink = (props) => {
    return(      
        <div>
            <a className={props.className}  href={props.href}>{props.children}</a>
        </div>
    )
}

export default ButtonLink;