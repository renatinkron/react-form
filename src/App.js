import React, { useState } from "react";
import ReactForm from "./components/ReactForm";
import "./App.css";

const INITIAL_FORM_VALUES = {
  teste: "",
  email: "",
  senha: "",
  savePass: false,
};

function App() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  function change(e) {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    if (e.target.type === "submit") {
      e.preventDefault();
    }
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <div className="form">
        <ReactForm
          formFields={[
            {
              name: "teste",
              id: "teste",
              autoComplete: "email",
              type: "text",
              placeholder: "Teste",
              handleChange: change,
              value: formValues.teste,
            },
            {
              name: "email",
              id: "email",
              autoComplete: "email",
              type: "email",
              placeholder: "Email",
              handleChange: change,
              value: formValues.email,
            },
            {
              name: "senha",
              id: "pass",
              autoComplete: "off",
              type: "password",
              placeholder: "Senha",
              handleChange: change,
              value: formValues.senha,
            },
            {
              name: "savePass",
              id: "savePass",
              autoComplete: "",
              type: "checkbox",
              placeholder: "Check",
              value: formValues.savePass,
              handleChange: change,
            },
            {
              name: "select",
              id: "r_select",
              autoComplete: "",
              type: "select",
              value: formValues.selected,
              options: ["a", "b", "c"],
              handleChange: change,
            },
          ]}
        >
          <input type="button" value="asfassdfa" />
        </ReactForm>
      </div>
    </div>
  );
}

export default App;
