import React from "react";
import { ReactComponent as WtmIcon } from "../../../assets/svg/wtm-color.svg";
import { StyledDisclaimer } from "./styled";

const Disclaimer = props =>
{
    return (
        <StyledDisclaimer iconWidth={props.iconWidth}>
            <WtmIcon />
            <p className="copyright-text">Copyright 2019 - Never Network Alone [verein]</p>
        </StyledDisclaimer>
    );
};

export default Disclaimer;
