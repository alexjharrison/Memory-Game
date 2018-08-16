import React from "react";

const Card = props => {
    return (
        <div className="z-depth-3 card valign-wrapper" dataid={props.dog} onClick={props.clicked}>
            <img className="pup" dataid={props.dog} src={`images/${props.dog+1}.jpg`} alt="dog pick"/>
        </div>
    );
}

export default Card;