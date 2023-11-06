import React, { useEffect, useState } from "react";
import RightboxHeader from "./rightboxHeader/RightboxHeader";
import RightboxBottomInput from "./rightboxBottomInput/RightboxBottomInput";
import "./MessageRightBox.scss";
import { useData } from "../../context/DataContext";
const MesssageRightBox = () => {
  const { data } = useData();

  return (
    <>
      <div className="messagerightbox w-100">
        <RightboxHeader />
        <div className="messagemainarea">
          <div className="innerwrap">
            <div className="msgcontainer">
              {data.messages?.map((item, key) => {
                return (
                  <>
                    {item.sender ? (
                      <div className="sendermessagediv">
                        <p>{item.sender}</p>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.receiver ? (
                      <div className="receivermessagediv">
                        <p>{item.receiver}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <RightboxBottomInput />
      </div>
    </>
  );
};

export default MesssageRightBox;
