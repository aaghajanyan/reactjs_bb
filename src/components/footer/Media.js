import React from "react";
import PropTypes from "prop-types";
import { ImageLink } from "../../reactComponents/ImageLink"; 

class Media extends React.Component {
    render() {
        const socialList = this.props.mediaList.social.map((element, index) => {
            return <ImageLink href={element.href} key={index} className="media-container__social-item" src={element.imageSrc} parentClassName = "media-container__media-link"/>
        });
        const marketList = this.props.mediaList.market.map((element, index) => {
            return <ImageLink href={element.href} key={index} className="media-container__market-item" src={element.imageSrc} parentClassName = "media-container__media-link"/>
        });
        // const organizationsList = this.props.mediaList.organizations.map((element, index) => {
        //     return <ImageLink href={element.href} key={index} className="media-container__organizations-item" src={element.imageSrc} parentClassName = "media-container__media-link"/>
        // });

        return (
            <div className="media-container">
                <div className="media-container__media-content media-container__social-content">{socialList}</div>
                <div className="media-container__media-content media-container__market-content">{marketList}</div>
                {/* <div className="media-container__media-content media-container__organizations-content">{organizationsList}</div>*/ /*Now not visible*/}
            </div>
        );
    }
}

Media.propTypes = {
    mediaList: PropTypes.any
};

export { Media };