import React from 'react';

export default function Col(props) {
    const size = props.size.split(' ').map(size => 'col-' + size).join(' ');

    return(
        <div clasName= {size}>
            {props.children}
        </div>
    );
}