import React from "react";



const Jumbotron = () => {
    const style = {
        "background-image": "url('images/jumbotron.jpg')"
    }
    return (
        <div style={style} className="jumbotron center-align">
            <h1 className="display-4">Clicky App</h1>
            <h6>Don't click the same pupper twice</h6>
         </div>
    );
}

export default Jumbotron;