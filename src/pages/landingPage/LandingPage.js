import React from "react";
import { Link } from "react-router-dom";
import MainBox from "../../components/mainBox/MainBox";
import './LandingPage.scss'
const LandingPage = () => {
  return (
    <>
      <div className="mainwrapper">
        <div className="mainbg">
        <div className="themecolorstripe"></div>
        <MainBox />
        
        </div>
      </div>
    </>
  );
};

export default LandingPage;
