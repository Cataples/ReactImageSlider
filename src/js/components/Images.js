import React, { Component } from "react";

class Images extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            count: this.props.count,
        };
    }

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
                {this.props.images.map( ( el, index ) => (
                    <img key={ index } className="images" src={ el } alt="nature" />
                ) )}
            </div>
        );
    }
}

export default Images;
