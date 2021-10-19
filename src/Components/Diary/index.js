import React from "react";
import styled from "styled-components";

import TodoCreateForm from "./TodoCreateForm";

function Diary({ diary, setDiary }) {
  const setTodos = (setFunc) => {
    setDiary((prev) => {
      const newTodo = setFunc(prev.todos);

      return { ...prev, todos: newTodo };
    });
  };

  const pushTodo = (newTodoText) => {
    const newItem = {
      id: 0,
      checked: false,
      content: newTodoText,
    };

    setTodos((prevTodos) => [...prevTodos, newItem]);
  };

  return (
    <Container>
      <TodoCreateForm pushTodo={pushTodo} />
      <TempBox>TodoList</TempBox>
      <TempBox>Memo</TempBox>
    </Container>
  );
}

export default Diary;

const Container = styled.div``;

const TempBox = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 6px;

  & + & {
    margin-top: 10px;
  }
`;
