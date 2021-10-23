import React from "react";
import styled from "styled-components";

import { getFirstDate, getLastDate } from "utils/date";

import CalenderTHead from "./CalenderThead";
import CalenderTbody from "./CalenderTbody";

function Calendar({ date: today }) {
  const calendarMatrix = Array.from(Array(6), () => Array(7).fill(0));
  const firstDay = getFirstDate(today).getDay();
  const lastDate = getLastDate(today).getDate();

  let colIdx = firstDay;
  let rowIdx = 0;

  for (let i = 1; i <= lastDate; i++) {
    calendarMatrix[rowIdx][colIdx] = i;

    colIdx++;

    if (colIdx > 6) {
      colIdx = 0;
      rowIdx++;
    }
  }

  return (
    <CalendarTable>
      <CalenderTHead />

      <CalenderTbody matrix={calendarMatrix} />
    </CalendarTable>
  );
}

export default Calendar;

const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody:before {
    content: "-";
    display: block;
    line-height: 1em;
    color: transparent;
  }
`;
