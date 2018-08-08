import React from "react";

const Bullets = props => {
    const { initialImages, activeImageCount, bulletClick } = props;

    const buletsArray = initialImages.map( ( el, index ) => {
        let mappedIndex = activeImageCount;
        if ( activeImageCount === 0 ) {
            mappedIndex = initialImages.length;
        } else if ( activeImageCount === initialImages.length + 1 ) {
            mappedIndex = 1;
        }

        const activeClass = mappedIndex === index + 1 ? "bullet-active" : "";

        return <div className={ `bullet ${ activeClass } ` } key={ el } onClick={ bulletClick( index ) } />;
    } );

    return <div className="bulletContainer">{buletsArray}</div>;
};

export default Bullets;
