import { useEffect, useState } from "react";
import styled from "styled-components";

import { createDateKey } from "utils/date";
import { keyName, loadLS, saveLS } from "utils/localStorage";

import useDiary from "Components/Diary/hooks/useDiary";
import DateSelector from "Components/DateSelector";
import Diary from "Components/Diary";

const INIT_DIARY = {
  todos: [],
  memo: "",
};

function App() {
  const {
    diary,
    setDiary,
    pushTodo,
    delTodo,
    toggleCheckTodo,
    updateTodoContent,
    setMemo,
  } = useDiary(INIT_DIARY);
  const [date, setDate] = useState(new Date());

  const initLS = () => {
    const diaryLS = localStorage.getItem(keyName.diary);

    if (!diaryLS) {
      saveLS(keyName.diary, {});
    }
  };

  useEffect(initLS, []);

  const getDiary = (key) => {
    const diaryLS = loadLS(keyName.diary);
    const hasKey = Object.keys(diaryLS).some((savedKey) => savedKey === key);

    return hasKey ? diaryLS[key] : INIT_DIARY;
  };

  const loadData = () => {
    const key = createDateKey(date);
    const loaded = getDiary(key);

    setDiary(loaded);
  };

  useEffect(loadData, [date, setDiary]);

  const saveDiaryLS = () => {
    const prevDiaryLS = loadLS(keyName.diary);
    const newDiary = { ...prevDiaryLS, [createDateKey(date)]: diary };

    saveLS(keyName.diary, newDiary);
  };

  useEffect(saveDiaryLS, [date, diary]);

  return (
    <ContentConatainer>
      <DateSelector date={date} setDate={setDate} />
      <Diary
        date={date}
        diary={diary}
        editDiary={{
          pushTodo,
          delTodo,
          toggleCheckTodo,
          updateTodoContent,
          setMemo,
        }}
      />
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
