import React, { useState } from "react";
import Icon from "./icon";
import CatImg from "../images/cat.jpg";
import MeImg from "../images/me.jpg";

export default function SwitchIcon() {
   const [isCatIcon, setIsCatIcon] = useState(true);
   return (
      <div className="switchIcon" onClick={() => setIsCatIcon(!isCatIcon)}>
         {isCatIcon ? <Icon img={CatImg} /> : <Icon img={MeImg} />}
      </div>
   );
}
