import React, { useEffect, useState } from "react";
import "./RightboxHeader.scss";
import { useData } from "../../../context/DataContext";
const RightboxHeader = () => {
  const { data } = useData();

  const [messagesdata, setmessagesdata] = useState([]);

  useEffect(() => {
    setmessagesdata(data.messages);
  }, [data.messages]);

  return (
    <>
      <div className="rightboxheader">
        <div className="imgbox">
          {data.imgurl}

          {messagesdata?.map((item, key) => {
            return (
              <>
                <p>{item.sender}</p>
                <p>{item.receiver}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightboxHeader;
