import React from "react";

const Buttons = props => {
    const { direction, click } = props;
    const content = direction === "left" ? "<" : ">";
    return (
        <button className={ `${ direction } buttons` } onClick={ click }>
            {content}
        </button>
    );
};

export default Buttons;
