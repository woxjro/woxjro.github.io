import React from "react";
import Link from "./link";

import IconLaravel from "react-devicon/laravel/plain";

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
      { icon: "laravel", title: "laravel", icon_tail: "plain" },
      { icon: "mysql", title: "mysql", icon_tail: "plain" },
   ];

   let tools = [
      { icon: "vim", title: "vim", icon_tail: "original" },
      { icon: "git", title: "git", icon_tail: "plain" },
      { icon: "github", title: "github", icon_tail: "original" },
   ];

   return (
      <div className="linksList">
         <div className="languages">
            <p className="title">languages</p>
            {languages.map((techstack) => {
               let { icon, title, icon_tail } = techstack;
               return (
                  <img className="techstack"
                     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                     height="25"
                  />
               );
            })}
         </div>
         <div className="web">
            <p className="title">web</p>
            {web.map((techstack) => {
               let { icon, title, icon_tail } = techstack;

               return (
                  <img className="techstack"
                     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                     height="25"
                  />
               );
            })}
         </div>

         <div className="tools">
            <p className="title">tools</p>
            {tools.map((techstack) => {
               let { icon, title, icon_tail } = techstack;

               return (
                  <img className="techstack"
                     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon_tail}.svg`}
                     height="25"
                  />
               );
            })}
         </div>
      </div>
   );
}
