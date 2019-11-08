import React from "react";
import { Privacy } from "./Privacy";
import { FooterNavBar } from "./FooterNavBar";
import { privacyText } from "../../resources/footerConstants";
import { AdditionalInformation } from "./AdditionalInformation";
import { navBarItems } from "../../resources/navbarConstants";

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <FooterNavBar navBarItems={navBarItems.bottomPart}/>
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