import React from "react";

const Bullets = props => {
    const { initialImages, activeImageCount } = props;

    const BuletsArray = initialImages.map( ( el, index ) => {
        let activeClass = "";
        let mappedIndex = activeImageCount;
        if ( activeImageCount === 0 ) {
            mappedIndex = initialImages.length;
        } else if ( activeImageCount === initialImages.length + 1 ) {
            mappedIndex = 1;
        }

        activeClass = mappedIndex === index + 1 ? "bullet-active" : "";

        return (
            <div className={ `bullet ${ activeClass } ` } key={ el } onClick={ props.bulletClick( index ) } />
        );
    } );

    return <div className="bulletContainer">{BuletsArray}</div>;
};

export default Bullets;
