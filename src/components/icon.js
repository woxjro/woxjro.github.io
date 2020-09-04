import React from "react";
export default function Icon({ img }) {
   return (
      <div className="icon">
         <div className="icon container">
            <img className="icon img" src={img} alt="icon" />
         </div>
      </div>
   );
}
