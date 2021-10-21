import React, { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";

import color from "constant/color";
import { useEffect } from "react/cjs/react.development";

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
        <HiOutlinePencil />
      </button>
    </Form>
  );
}

export default EditForm;

const Form = styled.form`
  display: flex;
  align-items: center;

  button {
    font-size: 16px;
    height: 16px;
    color: ${color.light};
  }
`;
const EditInput = styled.input`
  width: 20em;
  font-size: 16px;
  border: 0;
  background: none;
`;
