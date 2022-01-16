import React from "react";
const withLabels =
  (WrappedComponent) =>
  ({ label, id, ...otherProps }) => {
    // console.log(otherProps);
    return (
      <div style={{ marginBottom: `5px` }}>
        <label htmlFor={id}>{label}</label>
        <br />
        <WrappedComponent id={id} {...otherProps} />
      </div>
    );
  };

const InputComponent = ({ type, id, ...otherProps }) => {
  // console.log(type);
  switch (type) {
    case "select":
      return (
        <select id={id} onChange={otherProps.onChange}>
          <option value="select" disabled selected hidden>
            Select
          </option>
          {otherProps.options.map((option) => (
            <option
              value={option.value === undefined ? option.label : option.value}
              key={option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    default:
      return <input id={id} type={type} {...otherProps} />;
  }
};

export { InputComponent, withLabels };
