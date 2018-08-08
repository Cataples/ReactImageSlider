import React, { Component } from "react";
import Buttons from "./buttons";
import Images from "./images";
import Bullets from "./bullets";

class ImageSlider extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",
                "https://images.all-free-download.com/images/graphicthumb/canoe_water_nature_221611.jpg",
                "http://sim01.in.com/4fc598f2c9f2c0cdc5e0decc188d8d10_ft_xl.jpg",
                "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f033882f3c25404e3f904fbfe2351be&w=1000&q=80",
            ],
            initialImages: [],
            activeImageCount: 1,
            transition: "all 1s",
            isButtonActive: true,
        };

        this.handleClickRight = this.handleClickRight.bind( this );
        this.handleClickLeft = this.handleClickLeft.bind( this );
        this.activateButton = this.activateButton.bind( this );
        this.handleBulletClick = this.handleBulletClick.bind( this );
    }

    componentDidMount() {
        const { images } = this.state;

        const lastElelemnt = images[ images.length - 1 ];
        const firstElement = images[ 0 ];

        const imagesCopy = images.slice();
        const initialImages = images.slice();
        imagesCopy.unshift( lastElelemnt );
        imagesCopy.push( firstElement );

        this.setState( {
            initialImages,
            images: imagesCopy,
        } );
    }

    handleClickRight() {
        const { images, activeImageCount, isButtonActive } = this.state;
        const lastImageIndex = images.length - 1;

        if ( !isButtonActive ) {
            return;
        }

        if ( activeImageCount === lastImageIndex - 1 ) {
            this.setState( {
                activeImageCount: activeImageCount + 1,
                isButtonActive: false,
                transition: "all 1s",
            } );
            setTimeout( () => {
                this.setState( {
                    transition: "all 0s",
                    activeImageCount: 1,
                } );
            }, 1000 );
        } else {
            this.setState( {
                activeImageCount: activeImageCount + 1,
                transition: "all 1s",
                isButtonActive: false,
            } );
        }
        setTimeout( this.activateButton, 1000 );
    }

    handleClickLeft() {
        const { images, activeImageCount, isButtonActive } = this.state;
        const lastImageIndex = images.length - 1;

        if ( !isButtonActive ) {
            return;
        }

        if ( activeImageCount === 1 ) {
            this.setState( {
                activeImageCount: activeImageCount - 1,
                isButtonActive: false,
                transition: "all 1s",
            } );
            setTimeout( () => {
                this.setState( {
                    transition: "all 0s",
                    activeImageCount: lastImageIndex - 1,
                } );
            }, 1000 );
        } else {
            this.setState( {
                activeImageCount: activeImageCount + 1,
                transition: "all 1s",
                isButtonActive: false,
            } );
        }

        const newActiveImageCount =
            activeImageCount === 0 ? lastImageIndex - 1 : activeImageCount - 1;

        this.setState( {
            activeImageCount: newActiveImageCount,
        } );

        setTimeout( this.activateButton, 1000 );
    }

    activateButton() {
        this.setState( {
            isButtonActive: true,
        } );
    }

    handleBulletClick( index ) {
        return () => {
            this.setState( {
                activeImageCount: index + 1,
                bulletIndex: index,
            } );
        };
    }

    render() {
        const {
            initialImages, bulletIndex, activeImageCount, images, transition,
        } = this.state;

        return (
            <div className="viewport">
                <Bullets
                    initialImages={ initialImages }
                    bulletClick={ this.handleBulletClick }
                    buleltIndex={ bulletIndex }
                    activeImageCount={ activeImageCount }
                />
                <Buttons direction="right" click={ this.handleClickRight } />
                <Buttons direction="left" click={ this.handleClickLeft } />
                <Images images={ images } count={ activeImageCount } transition={ transition } />
            </div>
        );
    }
}

export default ImageSlider;
