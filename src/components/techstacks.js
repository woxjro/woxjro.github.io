import React from "react";
import Link from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechStacks({ linkInfoArr }) {
   let languages = [
      { icon: "rust", title: "rust", icon_tail: "plain" },
      { icon: "javascript", title: "javascript", icon_tail: "plain" },
      { icon: "typescript", title: "typescript", icon_tail: "plain" },
      { icon: "python", title: "python", icon_tail: "plain" },
      { icon: "php", title: "php", icon_tail: "plain" },
      { icon: "java", title: "java", icon_tail: "plain" },
      { icon: "ocaml", title: "ocaml", icon_tail: "plain" },
      { icon: "csharp", title: "csharp", icon_tail: "plain" },
   ];

   let web = [
      { icon: "react", title: "react/react-native", icon_tail: "original" },
      { icon: "redux", title: "redux", icon_tail: "original" },
      { icon: "laravel", title: "laravel", icon_tail: "plain" },
      { icon: "mysql", title: "mysql", icon_tail: "plain" },
   ];

   let tools = [
      { icon: "vim", title: "vim", icon_tail: "original" },
      { icon: "ubuntu", title: "ubuntu", icon_tail: "plain" },
      { icon: "apple", title: "OSX", icon_tail: "original" },
      { icon: "git", title: "git", icon_tail: "plain" },
      { icon: "github", title: "github", icon_tail: "original" },
   ];

   return (
      <div className="techStackList">
         <div className="container languages">
            <p className="title">languages</p>
            {languages.map((techstack) => {
               let { icon, title, icon_tail } = techstack;
               return (
                  <img
                     className="techstack"
                     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                     height="25"
                  />
               );
            })}
         </div>
         <div className="container web">
            <p className="title">web/App</p>
            {web.map((techstack) => {
               let { icon, title, icon_tail } = techstack;

               return (
                  <img
                     className="techstack"
                     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                     height="25"
                  />
               );
            })}
         </div>

         <div className="container tools">
            <p className="title">tools</p>
            <div>
               {tools.map((techstack) => {
                  let { icon, title, icon_tail } = techstack;

                  return (
                     <img
                        className="techstack"
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                        height="25"
                     />
                  );
               })}
            </div>

            <div>
               <FontAwesomeIcon
                  className={"keyboard"}
                  icon="fa-solid fa-keyboard"
               />
               <a
                  href={
                     "https://www.realforce.co.jp/products/R2TLA-US-BK/US3.html"
                  }
               >
                  REALFORCE R2TLA-US3-BK
               </a>
            </div>
         </div>
      </div>
   );
}
