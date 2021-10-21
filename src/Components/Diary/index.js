import React from "react";
import styled from "styled-components";

import TodoCreateForm from "./Todo/TodoCreateForm";
import TodoList from "./Todo/TodoList";
import Memo from "./Memo";

function Diary({
  diary,
  editDiary: { pushTodo, delTodo, toggleCheckTodo, updateTodoContent, setMemo },
}) {
  return (
    <Container>
      <TodoCreateForm pushTodo={pushTodo} />
      <TodoList
        todos={diary.todos}
        editTodos={{ delTodo, toggleCheckTodo, updateTodoContent }}
      >
        TodoList
      </TodoList>

      <Memo memo={diary.memo} setMemo={setMemo}>
        Memo
      </Memo>
    </Container>
  );
}

export default Diary;

const Container = styled.div``;
