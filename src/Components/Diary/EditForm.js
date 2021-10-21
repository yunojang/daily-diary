import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";

import color from "constant/color";

function EditForm({ todo: { id, content }, updateTodoContent, setEditmode }) {
  const [input, setInput] = useState(content);

  const edit = (e) => {
    e.preventDefault();
    updateTodoContent(id, input);

    setEditmode(false);
  };

  return (
    <Form onSubmit={edit}>
      <EditInput value={input} onChange={(e) => setInput(e.target.value)} />

      <button>
        <HiOutlinePencil />
      </button>
    </Form>
  );
}

export default EditForm;

const Form = styled.form`
  border: 1px solid ${color.light};
  padding: 0.2em;
  display: flex;
  align-items: center;

  button {
    font-size: 16px;
    height: 16px;
    color: ${color.light};
  }
`;
const EditInput = styled.input`
  font-size: 16px;
  width: 20em;
  border: 0;
`;
