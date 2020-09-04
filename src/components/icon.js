import React from "react";
import Img from "../images/cat.jpg";
export default function Icon() {
   return (
      <div className="icon">
         <div className="icon container">
            <img className="icon img" src={Img} alt="icon" />
         </div>
      </div>
   );
}
