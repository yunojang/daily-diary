import React, { memo } from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

import color from "constant/color";

function TodoItem({
  todo: { id, content, checked },
  editTodos: { toggleCheckTodo, delTodo },
}) {
  const toggleCheck = () => {
    toggleCheckTodo(id);
  };

  const del = () => {
    delTodo(id);
  };

  return (
    <Todo checked={checked}>
      <Left>
        <CheckButton onClick={toggleCheck} checked={checked}>
          {checked && <AiOutlineCheck />}
        </CheckButton>
        <Content>{content}</Content>
      </Left>

      <DelButton onClick={del}>
        <FaRegTrashAlt />
      </DelButton>
    </Todo>
  );
}

export default memo(TodoItem);

const Todo = styled.li`
  background: #fff;
  height: 2.7em;
  padding: 0 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.main};
  transition: 0.15s cubic-bezier(0, 0, 0, 1);

  ${(props) =>
    props.checked &&
    css`
      background: #f2fff2;
      text-decoration: line-through;
      color: #bbb;
    `}
`;

const Content = styled.span``;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckButton = styled.button`
  position: relative;
  top: 2px;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid ${color.light};
  transition: 0.15s cubic-bezier(0, 0, 0, 1);

  ${(props) => props.checked && `background:#77cc77`};

  svg {
    position: absolute;
    transform: translate(-50%, -55%);
    font-size: 21px;
    color: #fff;
  }
`;

const DelButton = styled.button`
  font-size: 15px;
  color: ${color.light};
`;
