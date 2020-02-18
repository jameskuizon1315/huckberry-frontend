import * as React from "react";
import { ReactComponent as BagLogo } from "../../assets/icon-bag.svg";
import "../../assets/styles/right-banner-gutter/index.css";

const TopRightList = () => {
  return (
    <ul className="container tr">
      <li className="mr-20">
        <a className="mr-2">Subscribe</a>
        <img
          src=" https://huckberry.com/assets/images/shared/button-icon-email-17a48a6cb74c340048a50f3d5e8c1ee0.svg"
          className="subscribe-icon"
        />
        <a className="mr-2">Log In</a>
      </li>
      <li className="mr-20 bag-icon">
        <BagLogo />
      </li>
    </ul>
  );
};

export default TopRightList;
