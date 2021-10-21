import React from "react";
import styled from "styled-components";

import useToggle from "hooks/useToggle";
import Title from "Components/Title";
import { WarnMsg } from "Components/Warn";
import color from "constant/color";

import TodoItem from "./TodoItem";
import ToggleButton from "Components/ShowToggleButton";

function TodoList({ todos, editTodos }) {
  const [summarize, toggle] = useToggle(false);
  const checkedCount = todos.filter((todo) => todo.checked).length;

  return (
    <Container>
      <Header>
        <Title size={1.2}>To-do</Title>
        <span>
          {checkedCount}/{todos.length}
        </span>
      </Header>

      {todos.length > 0 ? (
        <div>
          <List
            className={summarize ? "hide" : "show"}
            itemLenght={todos.length}
          >
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} editTodos={editTodos} />
            ))}
          </List>

          {todos.length > 1 && (
            <ToggleButton onClick={toggle} summarize={summarize}>
              <span></span>
              <span></span>
            </ToggleButton>
          )}
        </div>
      ) : (
        <WarnMsg>Empty list</WarnMsg>
      )}
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  margin-bottom: 2em;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;

  span {
    font-size: 13px;
    margin-left: 0.7em;
  }
`;

const List = styled.ul`
  overflow: hidden;
  height: calc(2.7em * ${(props) => props.itemLenght});
  transition: 0.2s cubic-bezier(0, 0, 0, 1);

  &.hide {
    height: 2.7em;
  }

  li + li {
    border-top: 1px solid ${color.bright};
  }
`;
