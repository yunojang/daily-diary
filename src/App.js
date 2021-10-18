import { useEffect, useState } from "react";
import styled from "styled-components";

import { createDateKey } from "utils/date";

import TodoCreate from "Components/TodoCreate";
import DateSelector from "Components/DateSelector";
import Diary from "Components/Diary";

const INITIAL_DIARY = {
  todos: [],
  memo: "",
};

function App() {
  const [diary, setDiary] = useState(INITIAL_DIARY);
  const [date, setDate] = useState(new Date());

  const loadData = () => {
    const key = createDateKey(date);

    // ls load ( with key )
    const loaded = key && {};
    setDiary(loaded);
  };

  useEffect(loadData, [date]);

  const setTodos = (newTodos) => {
    setDiary((prev) => ({ ...prev, todos: newTodos }));
  };

  return (
    <ContentConatainer>
      <DateSelector date={date} setDate={setDate} />
      <TodoCreate setTodos={setTodos} />
      <Diary diary={diary} />
    </ContentConatainer>
  );
}

export default App;

const ContentConatainer = styled.main`
  width: 640px;
  margin: auto;
  margin-top: 30px;
  padding: 25px 30px;
  border-radius: 10px;
`;
