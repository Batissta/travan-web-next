import React from "react";

const Separator = ({ className }: { className?: string }) => {
  return (
    <div
      className={`grid grid-cols-1 bg-slate-600/20 h-[1px] rounded-2xl ${
        className && className
      }`}
    ></div>
  );
};

export default Separator;
