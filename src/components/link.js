import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Link({ size, color, icon, linkUrl, linkName }) {
   return (
      <div className="link">
         <div className="link container">
            <FontAwesomeIcon size={size} color={color} icon={icon} />
            <a href={linkUrl}>{linkName}</a>
         </div>
      </div>
   );
}
