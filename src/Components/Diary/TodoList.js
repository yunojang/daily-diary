import React from "react";
import styled from "styled-components";

import Title from "Components/Title";
import TodoItem from "./TodoItem";
import color from "constant/color";

function TodoList({ todos, editTodos }) {
  const checkedCount = todos.filter((todo) => todo.checked).length;

  return (
    <Container>
      <Header>
        <Title size={1.2}>To-do</Title>{" "}
        <span>
          {checkedCount}/{todos.length}
        </span>
      </Header>

      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} editTodos={editTodos} />
        ))}

        {todos.length < 1 && <Warn>Empty list</Warn>}
      </List>
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  margin-bottom: 14px;
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
  li + li {
    border-top: 1px solid ${color.bright};
  }
`;

const Warn = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1em;
  margin: 32px;
  color: ${color.main};
`;
