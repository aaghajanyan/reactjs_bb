import React from "react";
import { imagesList, TABLET_SIZE, MOBILTE_SIZE } from "../resources/images";
import { getRandomIndex } from "../utils/helper";

class ImageCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    render() {
        let imageListBySize =
            this.state.width > TABLET_SIZE
                ? imagesList.desktop
                : this.state.width > MOBILTE_SIZE &&
                  this.state.width < TABLET_SIZE
                ? imagesList.tablet
                : imagesList.mobile;
                
        let index = getRandomIndex(imageListBySize.length - 1);
        return (
            <div className="image-container">
                <a href={imageListBySize[index].href}>
                    <img
                        className="image-item"
                        src={imageListBySize[index].imageSrc}
                    />
                </a>
            </div>
        );
    }
}

export { ImageCarousel };
