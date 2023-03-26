import React, { useState } from "react";

const FormInput = props => {
  const { id, label, errorMsg, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500  block w-full p-2.5"
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      {errorMsg && (
        <span className="errormsg text-sm text-red-600">{errorMsg}</span>
      )}
    </div>
  );
};

export default FormInput;
