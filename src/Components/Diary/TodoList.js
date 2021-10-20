import React from "react";
import styled from "styled-components";

import Title from "Components/Title";
import TodoItem from "./TodoItem";
import color from "constant/color";

function TodoList({ todos, editTodos }) {
  return (
    <Container>
      <Title size={1.2}>To-do</Title>

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
