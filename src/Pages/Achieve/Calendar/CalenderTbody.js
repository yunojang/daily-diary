import React from "react";
import styled from "styled-components";
import { createDateKey } from "utils/date";

import { keyName, loadLS } from "utils/localStorage";
import { getAchieveColor } from "../utils/degree";

function CalenderTbody({ month, matrix }) {
  const getKey = (month, cellDate) => {
    const date = new Date(month);
    date.setDate(cellDate);
    const key = createDateKey(date);

    return key;
  };

  const getAchieveCount = (cellDiary) => {
    const isChecked = (todo) => todo.checked;

    return cellDiary.todos.filter(isChecked).length;
  };

  const createCell = (cell, idx) => {
    if (cell === 0) {
      return <Td key={idx} className="empty"></Td>;
    }

    const cellKey = getKey(month, cell);
    const lsDairy = loadLS(keyName.diary);
    const cellDiary = lsDairy[cellKey];

    if (!cellDiary) {
      return <Td key={idx}>{cell}</Td>;
    }

    const achieveCount = getAchieveCount(cellDiary);

    if (achieveCount === 0) {
      return <Td key={idx}>{cell}</Td>;
    }

    const color = getAchieveColor(achieveCount);

    return (
      <Td key={idx} color={color}>
        {cell}
      </Td>
    );
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

const Td = styled.td`
  border: 1px solid #ccc;
  width: 6em;
  height: 5em;
  padding: 0.2em;
  font-weight: bold;
  font-size: 15px;
  vertical-align: top;
  text-align: start;
  background: ${(props) => props.color};
`;
