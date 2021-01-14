import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

//scss
import "./HeaderComponent.scss";

const HeaderComponent = () => {
    return (
        <div className="HeaderComponent">
            <Container>
                <div className="header">
                    <div className="logo">
                        <span>개발자국</span>
                    </div>
                    <div className="menu">
                        <span>홈</span>
                        <span>팀소개</span>
                        <span>발자취</span>
                        <span>컨택</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeaderComponent;
