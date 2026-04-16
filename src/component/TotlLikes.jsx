import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";
// function globaltoggle() {}
const TotalLikes = (props) => {
  const { theme } = useContext(themeContext);
  console.log("THEME", theme);
  console.log(theme);
  const totalLikesofallpost = props.totalLikes;
  console.log(totalLikesofallpost);
  // if (theme === "dark") {
  //   return (
  //     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-pink-600 font-medium text-sm">
  //       <span className="text-lg">❤️</span>
  //       <span className="text-white"> {totalLikesofallpost} Likes</span>
  //     </div>
  //   );
  // }
  return (
    <>
      <div
        className={`${theme === "dark" ? "bg-black" : "bg-pink-100"} 
 inline-flex items-center gap-2 px-3 py-1 rounded-full  dark:bg-gray-950 font-medium text-sm`}
      >
        <span className="text-lg">❤️</span>
        <span
          className={`${theme === "dark" ? "text-white" : "text-pink-600"}`}
        >
          {totalLikesofallpost} Likes
        </span>
      </div>
      <br />
    </>
  );
};

export default TotalLikes;
