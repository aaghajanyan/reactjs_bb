import React from "react";
import { Privacy } from "./Privacy";
import { FooterNavBar } from "./FooterNavBar";
import { privacyText } from "../../resources/footerConstants";
import { AdditionalInformation } from "./AdditionalInformation";

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <FooterNavBar />
                <div className="footer-container__footer-details-container">
                    <div className="footer-container__footer-details">
                        <Privacy privacyText={privacyText}/>
                        <AdditionalInformation />
                    </div>
                </div>
            </div>
        );
    }
}

export { Footer };