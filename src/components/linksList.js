import React from "react";
import Link from "./link";
export default function LinksList({ linkInfoArr }) {
   return (
      <div className="linksList">
         {linkInfoArr.map((linkInfo) => {
            const { size, color, icon, linkUrl, linkName } = linkInfo;
            return (
               <Link
                  size={size}
                  color={color}
                  icon={icon}
                  linkUrl={linkUrl}
                  linkName={linkName}
               />
            );
         })}
      </div>
   );
}
