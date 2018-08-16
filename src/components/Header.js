import React from "react";

const Header = props => (
    <nav>
        <div className="nav-wrapper orange accent-1 valign-wrapper">
            <h4 className="brand-logo left">{props.message}</h4>
            <h5 className="brand-logo right">Score: {props.current} | Top Score: {props.top}</h5>
        </div>
    </nav>
)

export default Header;