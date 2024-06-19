import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose, IoPencil, IoTrash } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, onDelete, onEdit, onAction }) {
  const handleActionClick = (action) => {
    onAction(action, data);
  };

  return (
    <motion.div
      drag
      dragElastic={0.1}
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="w-60 flex-shrink-0 relative overflow-hidden h-72 rounded-[40px] text-white px-8 py-10 bg-zinc-900/90 bg-sky-200"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute w-full left-0 bottom-0">
        <div className="flex items-center py-3 px-8 justify-between mb-3">
          <h5>{data.filesize}</h5>
          <div className="flex gap-2">
            <button className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center" onClick={() => onEdit(data.id)}>
              <IoPencil size=".7em" color="#fff" />
            </button>
            <button className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center" onClick={() => onDelete(data.id)}>
              <IoTrash size=".7em" color="#fff" />
            </button>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center" onClick={() => handleActionClick(data.tag.tagTitle)}>
              {data.tag.tagTitle === "Download Now" ? <LuDownload size=".7em" color="#fff" /> : <IoClose />}
            </span>
          </div>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
