import React, { useRef, useState } from "react";
import Card from "./Card";


function Forground() {
  const ref=useRef(null)
  // const data=[
  //   icons,name,files size, closeOrDownload, tabdetails,
  // ]

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="w-full h-full fixed p-5 top-0 left-0 z-[3] flex-wrap flex gap-10">
      {data.map((item, index)=>(
        <Card reference={ref} data={item}/>
      ))}
    </div>
  );
}

export default Forground;
