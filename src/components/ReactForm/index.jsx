import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class Field {
  constructor(
    name = "",
    id = "",
    handleChange = function () {},
    type = "text",
    autoComplete = "off",
    value = "",
    options = [],
    placeholder = ""
  ) {
    this.name = name;
    this.id = this.uniqueID(id);
    this.handleChange = handleChange;
    this.type = type;
    this.autoComplete = autoComplete;
    this.options = options;
    this.value = value;
    this.placeholder = placeholder;
  }
  uniqueID(prefix) {
    if (prefix) {
      return Date.now() + prefix.toString() + Math.round(Math.random() * 1000);
    } else {
      return Date.now() + "UUID" + Math.round(Math.random() * 1000);
    }
  }
}

const generateField = (field = new Field()) => {
  if (field.type === "select") {
    return (
      <select
        value={field.value}
        name={field.name}
        id={field.id}
        onChange={field.handleChange}
      >
        {field.options &&
          field.options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
      </select>
    );
  }
  if (field.type === "checkbox") {
    return (
      <div className="check">
        <input
          type={field.type}
          onChange={field.handleChange}
          name={field.name}
          id={field.id}
          checked={field.value}
        />
        <label htmlFor={field.id}>{field.placeholder}</label>
      </div>
    );
  }
  return (
    <input
      type={field.type || "text"}
      onChange={field.handleChange}
      name={field.name}
      id={field.id}
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
      value={field.value}
    />
  );
};

export function ReactForm({ formFields, handleSubmit, children }) {
  return (
    <form className="ReactForm__form" onSubmit={handleSubmit}>
      {formFields.map((field) => generateField(field))}
      {children}
    </form>
  );
}

ReactForm.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.any,
      handleChange: PropTypes.func,
      type: PropTypes.string,
      autoComplete: PropTypes.string,
      placeholder: PropTypes.string,
    })
  ),
  handleSubmit: PropTypes.func,
};

export default ReactForm;
