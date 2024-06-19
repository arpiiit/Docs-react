import React, { useRef } from "react";
import Card from "./Card";

function Forground({ documents, handleDelete, handleEdit }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className="w-full h-full fixed p-5 top-[15%] left-0 z-[3] flex-wrap flex gap-10 overflow-auto">
      {documents.map((item) => (
        <Card key={item.id} reference={ref} data={item} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
}

export default Forground;
