import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Card";

class ProgramCardDeck extends React.Component {
    render() {
        return (
            <div className="program-card-deck-container">
                    {Object.keys(this.props.programData).map((key) => (
                        <Card
                            key={key}
                            index={key}
                            details={this.props.programData[key]}
                        />
                    ))}
            </div>
        );
    }
}

ProgramCardDeck.propTypes = {
    programData: PropTypes.any
};

export { ProgramCardDeck };