import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

import color from "constant/color";

function EditForm({
  todo: { id, content },
  updateTodoContent,
  editmode,
  setEditmode,
}) {
  const inputRef = useRef(null);
  const [input, setInput] = useState(content);

  const edit = (e) => {
    e.preventDefault();
    updateTodoContent(id, input);

    setEditmode(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [editmode]);

  return (
    <Form onSubmit={edit}>
      <EditInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button>
        <FiEdit3 />
      </button>
    </Form>
  );
}

export default EditForm;

const Form = styled.form`
  display: flex;
  align-items: center;

  button {
    background: none;
    font-size: 17px;
    height: 1em;
    color: ${color.light};
  }
`;
const EditInput = styled.input`
  width: 30em;
  font-size: 16px;
  border: 0;
  background: none;
`;
