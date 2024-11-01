import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, className, placeholder, onClick, onChange }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type={type}
          className={className}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;
