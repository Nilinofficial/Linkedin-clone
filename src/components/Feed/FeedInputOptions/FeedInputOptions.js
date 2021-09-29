import React from 'react';
import "./FeedInputOptions.css"

function FeedInputOptions({title,Icon,color}) {
    return (
        <div className="feedinputOptions">
            {Icon && <Icon style={{color:color}}/>}
            <h4>{title}</h4>
        </div>
    )
}

export default FeedInputOptions
