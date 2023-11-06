import React, { useEffect, useState } from "react";
import { contactListApi } from "../../../utils/contactlistApi";
import "./TotalContactList.scss";
import { useData } from "../../../context/DataContext";
const TotalContactList = () => {
  const { setData } = useData();

  const [firstdata, setfdata] = useState(true);

  if (firstdata) {
    setData(contactListApi[0]);
  }

  const handlesingleclick = async (myitem) => {
    console.log(myitem);
    await setData(myitem);
    setfdata(false);
  };
  return (
    <>
      <div className="totalcontactlist">
        {contactListApi.map((item, key) => {
          return (
            <div
              key={key}
              className="singlecontactitem d-flex align-items-center"
              onClick={() => handlesingleclick(item)}
            >
              <div className="svgwrap">{item.imgurl}</div>

              <div className="rightside">
                <p>{item.name}</p>
                <p className="smtext">{item.latestmessage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TotalContactList;
