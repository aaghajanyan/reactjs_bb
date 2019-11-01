import React from "react";
import { Media } from "./Media";
import { imagesList } from "../../resources/imagesMedia";
import { DropdownComponent } from "../../reactComponents/DropdownComponent";
import { dropdownList } from "../../resources/dropdownList";

class AdditionalInformation extends React.Component {
    render() {
        return (
            <div className="additional-info-container">
                <Media mediaList={imagesList} />
                <div className="additional-info-container__language-content">
                    <label className="additional-info-container__language-level">Location / Language:</label>
                    <DropdownComponent dropdownList={dropdownList} />
                </div>
                <div className="additional-info-container__suppliers-content" >
                    <a href="#ca-supply-chain-act-2010" className="additional-info-container__suppliers">California Supply Chains Act</a>
                    <a href="#supplier-code" className="additional-info-container__suppliers">Supplier Code</a>
                </div>
            </div>
        );
    }
}

export { AdditionalInformation };