import React from "react";
import { ReactComponent as HuckberryLogo } from "./assets/huckberry-logo.svg";
import TopRightList from "./components/right-banner-gutter";
import "./Header.css";

function Header() {
  return (
    <div className="full-width">
      <div className="header">
        <div className="row align-middle container">
          <div className="col c4"></div>
          <div className="col c4 logo">
            <HuckberryLogo />
          </div>
          <div className="col c4">
            <TopRightList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
