import React, { useState } from "react";
import styled from "styled-components";

import MonthSelector from "./MonthSelector";
import Calendar from "./Calendar";

function CalendarApp(props) {
  const [date, setDate] = useState(new Date());

  return (
    <Conatiner>
      <MonthSelector date={date} setDate={setDate} />

      <Calendar date={date} />
    </Conatiner>
  );
}

export default CalendarApp;

const Conatiner = styled.main`
  background: #fff;
  border-radius: 8px;
  padding: 1.5em 1.5em 2em 1.5em;
`;
