import React from "react";
import styled from "styled-components";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

import color from "constant/color";

function TodoItem({ todo: { id, content, checked } }) {
  return (
    <Todo>
      <Left>
        <CheckButton>{checked && <AiOutlineCheck />}</CheckButton>
        <Content>{content}</Content>
      </Left>

      <DelButton>
        <AiOutlineDelete />
      </DelButton>
    </Todo>
  );
}

export default TodoItem;

const Todo = styled.li`
  background: #fff;
  height: 2.7em;
  padding: 0 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.span`
  color: ${color.main};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckButton = styled.button`
  position: relative;
  top: 2px;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid ${color.light};

  svg {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: ${color.light};
  }
`;

const DelButton = styled.button`
  font-size: 19px;
  color: ${color.light};
`;
