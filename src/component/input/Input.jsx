import React from "react";

const Input = ({ type, className, placeholder, onClick, onChange }) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
