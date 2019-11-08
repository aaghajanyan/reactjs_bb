import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {

    render() {
        return (
            <div className="card-container">
                <div className="card-container__card-image">
                    <img className="card-container__image-item" src={this.props.details.mainImage.desktop.sourceUrl} />
                </div>
                <div className="card-container__card-body">
                    <div className="card-container__card-title"> 
                        {this.props.details.title} 
                    </div>
                    <div className="card-container__card-description"> 
                        {this.props.details.shortDescription.raw}
                    </div>
                    <div className="card-container__card-details">
                        <div className="card-container__details-description">
                            <p className="card-container__duration">{this.props.details.programDuration.title} {this.props.details.programDurationType}s</p>
                            <p className="card-container__time">{this.props.details.programDuration.title} min/day</p>
                            <p className="card-container__trainer-list">
                                { this.props.details.trainers.map((item, index) => { 
                                return index !== this.props.details.trainers.length-1 ? item.title+", " : item.title
                                })}
                            </p>
                        </div>
                        <div className="card-container__details-icon">
                            <img className="card-container__icon-item" src={this.props.details.programIntensity.desktop.sourceUrl} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    details: PropTypes.any
};

export { Card };