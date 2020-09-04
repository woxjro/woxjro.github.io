import React, { useState } from "react";
import Icon from "./icon";
import CatImg from "../images/cat.jpg";
import MeImg from "../images/me.jpg";

export default function SwitchIcon() {
   const [isMeIcon, setIsMeIcon] = useState(true);
   return (
      <div className="switchIcon" onClick={() => setIsMeIcon(!isMeIcon)}>
         {isMeIcon ? <Icon img={MeImg} /> : <Icon img={CatImg} />}
      </div>
   );
}
