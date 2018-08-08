import React, { Component } from "react";

class Images extends Component {
    componentDidMount() {
        const { images } = this.props;
        this.imgContainer.style.width = `${ ( images.length + 2 ) * 900 }px`;
    }

    componentWillReceiveProps( nextProps ) {
        const { count, transition } = nextProps;
        this.imgContainer.style.left = `${ count * -900 }px`;
        this.imgContainer.style.transition = transition;
    }

    render() {
        return (
            <div
                className="images-container"
                ref={ input => {
                    this.imgContainer = input;
                } }
            >
                {this.props.images.map( el => (
                    <img key={ el } className="images" src={ el } alt="nature" />
                ) )}
            </div>
        );
    }
}

export default Images;
