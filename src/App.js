import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwitchIcon from "./components/switchIcon";
import Link from "./components/link";

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？
function App() {
   return (
      <div className="App">
         <SwitchIcon />
         <div className="links">
            <Link
               size="lg"
               color="white"
               icon={["fab", "github"]}
               linkUrl={"https://github.com/woxjro/"}
               linkName={"@woxjro"}
            />
            <Link
               size="lg"
               color="white"
               icon={["fab", "twitter"]}
               linkUrl={"https://twitter.com/woxjro"}
               linkName={"@woxjro"}
            />
            <Link
               size="lg"
               color="white"
               icon={["fas", "university"]}
               linkUrl={""}
               linkName={"Kyoto Univ."}
            />
            <Link
               size="lg"
               color="white"
               icon={["fas", "building"]}
               linkUrl={"http://x-point-1.net/"}
               linkName={"X.1"}
            />
         </div>
      </div>
   );
}

export default App;
