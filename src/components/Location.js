import React from "react";
import LocationIcon from "../assets/LocationIcon.svg";
const Location = () => {
  return (
    <>
      <div className="flex gap-1 h-10 mt-2 mb-2">
        <img src={LocationIcon} alt="LocationIcon" />
        <div className="flex flex-col justify-center">
          <span className="flex text-yellow-1000 p-1 text-lg">DELIVER TO</span>
        </div>
      </div>
    </>
  );
};

export default Location;
