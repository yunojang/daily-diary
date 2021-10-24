import React from "react";
import styled from "styled-components";
import { createDateKey } from "utils/date";

import { keyName, loadLS } from "utils/localStorage";
import CalenderCell from "./CalenderCell";

function CalenderTbody({ month, matrix }) {
  const getKey = (month, cellDate) => {
    const date = new Date(month);
    date.setDate(cellDate);
    const key = createDateKey(date);

    return key;
  };

  const createCell = (cell, idx) => {
    const cellKey = getKey(month, cell);
    const lsDairy = loadLS(keyName.diary);
    const cellDiary = lsDairy[cellKey];

    return <CalenderCell key={idx} date={cell} diary={cellDiary} />;
  };

  const creatRow = (row, idx) => {
    const tds = row.map(createCell);

    return <tr key={idx}>{tds}</tr>;
  };

  return <Tbody>{matrix.map(creatRow)}</Tbody>;
}

export default CalenderTbody;

const Tbody = styled.tbody`
  td:first-child {
    color: #ff5555;
  }
  td:last-child {
    color: #5588ee;
  }
  td.empty {
    background: #f2f2f2;
  }
`;
