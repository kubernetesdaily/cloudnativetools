import React from "react";

function Button({ text, className, link }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className={`flex justify-center gap-2 items-center font-semibold rounded-[20px] h-[60px]  bg-blue-600 px-[30px] min-w-[152px] ${className} cursor-pointer`}
      >
        <span className="text-base">{text} </span>
      </a>
    </div>
  );
}

export default Button;
