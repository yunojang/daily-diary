import color from "constant/color";
import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

function TodoCreateForm({ pushTodo }) {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputText.length < 1) {
      return;
    }

    setInputText("");
    pushTodo(inputText);
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        placeholder="Add your doing"
        value={inputText}
        onInput={(e) => setInputText(e.target.value)}
        maxLength="33"
      />
      <button>Add</button>
    </Form>
  );
}

export default TodoCreateForm;

const Form = styled.form`
  width: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid ${color.main};
  color: ${color.main};
  display: flex;
  align-items: center;

  input {
    padding: 8px 10px;
    font-size: 15px;
    flex-grow: 1;
    background: none;
    border: none;
  }

  button {
    padding: 12px;
    font-weight: bold;
    color: ${color.main};
  }
`;
