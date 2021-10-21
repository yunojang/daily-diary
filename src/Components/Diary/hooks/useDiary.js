import { useState } from "react";

const useDiary = (INIT_DIARY) => {
  const [diary, setDiary] = useState(INIT_DIARY);

  const calcId = (todos) => {
    const maxIdReducer = (max, cur) => (cur.id > max ? cur.id : max);

    return todos.reduce(maxIdReducer, -1) + 1;
  };

  const setTodos = (setFunc) => {
    setDiary((prev) => {
      const newTodo = setFunc(prev.todos);

      return { ...prev, todos: newTodo };
    });
  };

  const pushTodo = (newTodoText) => {
    setTodos((prevTodos) => {
      const newItem = {
        id: calcId(prevTodos),
        checked: false,
        content: newTodoText,
      };

      return [...prevTodos, newItem];
    });
  };

  const delTodo = (id) => {
    const differentId = (todo) => todo.id !== id;

    setTodos((prevTodos) => prevTodos.filter(differentId));
  };

  const toggleCheckTodo = (id) => {
    const toggleCheck = (todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo;

    setTodos((prevTodos) => prevTodos.map(toggleCheck));
  };

  const updateTodoContent = (id, content) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, content } : todo))
    );
  };

  const setMemo = (newMemo) => {
    setDiary((prev) => ({ ...prev, memo: newMemo }));
  };

  return {
    diary,
    setDiary,
    pushTodo,
    delTodo,
    toggleCheckTodo,
    updateTodoContent,
    setMemo,
  };
};

export default useDiary;
