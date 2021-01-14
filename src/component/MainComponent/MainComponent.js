import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import LogoReal from "img/LogoReal.jpg";
//scss
import "./MainComponent.scss";

const MainComponent = () => {
    return (
        <>
            <div className="MainComponent">
                <Container>
                    <img src={LogoReal} />
                </Container>
            </div>
        </>
    );
};

export default MainComponent;
