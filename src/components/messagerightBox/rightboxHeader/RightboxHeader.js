import React, { useEffect, useState } from "react";
import "./RightboxHeader.scss";
import { useData } from "../../../context/DataContext";
const RightboxHeader = () => {
  const { data } = useData();

  

  return (
    <>
      <div className="rightboxheader">
        <div className="imgbox">
          {data.imgurl}
        </div>
        <p>{data.name}</p>
      </div>
    </>
  );
};

export default RightboxHeader;
