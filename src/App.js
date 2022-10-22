import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import SwitchIcon from "./components/switchIcon";
import LinksList from "./components/linksList";
import Copyright from "./components/copyright";
import TechStacks from "./components/techstacks";

library.add(fab, fas, far);
function App() {
   const linkInfoArr = [
      {
         size: "lg",
         color: "white",
         icon: ["fab", "github"],
         linkUrl: "https://github.com/woxjro/",
         linkName: "@woxjro",
      },
      {
         size: "lg",
         color: "white",
         icon: ["fab", "twitter"],
         linkUrl: "https://twitter.com/woxjro",
         linkName: "@woxjro",
      },
      {
         size: "lg",
         color: "white",
         icon: ["fas", "university"],
         linkUrl: "",
         linkName: "Kyoto Univ.",
      },
      {
         size: "lg",
         color: "white",
         icon: ["fas", "building"],
         linkUrl: "http://x-point-1.net/",
         linkName: "X.1",
	  },
      {
         size: "lg",
         color: "white",
         icon: ["fas", "building"],
         linkUrl: "https://www.co-conv.jp/",
         linkName: "CO-CONV",
      },
   ];
   return (
      <div className="App">
         <SwitchIcon />
         <LinksList linkInfoArr={linkInfoArr} />
         <TechStacks linkInfoArr={linkInfoArr} />
         <Copyright />
      </div>
   );
}

export default App;
