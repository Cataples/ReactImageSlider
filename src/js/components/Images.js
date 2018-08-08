import React, { Component } from "react";

class Images extends Component {
    constructor() {
        super();
        this.state = {
            width: 900,
        };
    }

    componentDidMount() {
        const { width } = this.state;
        const { images } = this.props;
        this.imgContainer.style.width = `${ ( images.length + 2 ) * width }px`;
    }

    componentWillReceiveProps( nextProps ) {
        const { width } = this.state;
        const { count, transition } = nextProps;
        this.imgContainer.style.left = `${ count * -width }px`;
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
