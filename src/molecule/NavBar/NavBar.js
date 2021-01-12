import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

const NavBar = () => {
    return (
        <Container>
            <div className="NavBar">
                <div className="logo">
                    <span></span> <span>개발자국</span>
                </div>
            </div>
        </Container>
    );
};

export default NavBar;
