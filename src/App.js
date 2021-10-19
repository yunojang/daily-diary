import { useEffect, useState } from "react";
import styled from "styled-components";

import { createDateKey } from "utils/date";

import DateSelector from "Components/DateSelector";
import Diary from "Components/Diary";

const INIT_DIARY = {
  todos: [],
  memo: "",
};

function App() {
  const [diary, setDiary] = useState(INIT_DIARY);
  const [date, setDate] = useState(new Date());

  const loadData = () => {
    const key = createDateKey(date);

    const loaded = key && INIT_DIARY;
    setDiary(loaded);
  };

  useEffect(loadData, [date]);

  return (
    <ContentConatainer>
      <DateSelector date={date} setDate={setDate} />
      <Diary diary={diary} setDiary={setDiary} />
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
