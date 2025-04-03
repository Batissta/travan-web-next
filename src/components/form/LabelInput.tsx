import React from "react";

type PropsLabelInput = {
  label: string;
  htmlFor: string;
  type: string;
  placeholder?: string;
};

const LabelInput = ({ label, htmlFor, type, placeholder }: PropsLabelInput) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        className="border border-zinc-600 p-2 rounded"
        type={type}
        name={htmlFor}
        id={htmlFor}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
};

export default LabelInput;
