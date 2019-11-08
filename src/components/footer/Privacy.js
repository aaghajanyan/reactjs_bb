import React from "react";
import PropTypes from "prop-types";

class Privacy extends React.Component {
    render() {
        const privacyTextList = this.props.privacyText.map((element, index) => {
            return <p className="privacy-container__text-item" key={index}> {element} </p>
        });

        return (
            <div className="privacy-container">
                <span>
                    {privacyTextList}
                </span>
            </div>
        );
    }
}

Privacy.propTypes = {
    privacyText: PropTypes.any
};

export { Privacy };