import { IdCard, Key, Mail, MapPinned } from "lucide-react";
import React from "react";

type PropsLabelInput = {
  label?: string;
  htmlFor: string;
  type: string;
  placeholder?: string;
  className?: string;
  icon: "email" | "password" | "personality" | "pin";
};

const LabelInput = ({
  label,
  htmlFor,
  type,
  placeholder,
  icon,
  className,
  ...props
}: PropsLabelInput) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <label
        htmlFor={htmlFor}
        className="border border-zinc-600 p-2 rounded relative flex gap-2 items-center text-zinc-700"
      >
        {icon === "email" && <Mail width={16} height={16} />}
        {icon === "password" && <Key width={16} height={16} />}
        {icon === "personality" && <IdCard width={16} height={16} />}
        {icon === "pin" && (
          <MapPinned className={`${className}`} width={16} height={16} />
        )}
        <input
          className={`placeholder:text-zinc-400 grow focus:outline-none ${className}`}
          type={type}
          name={htmlFor}
          id={htmlFor}
          placeholder={placeholder && placeholder}
          {...props}
        />
      </label>
    </div>
  );
};

export default LabelInput;
