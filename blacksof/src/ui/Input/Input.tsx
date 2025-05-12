import React from "react";
import { TextInputProps } from "./Input.type";

export const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  // className = "",
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      // className={`form-input-custom ${className}`}
    />
  );
};
