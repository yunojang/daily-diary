import React from "react";
import styled from "styled-components";

import { getAchieveColor } from "../utils/degree";

function CalenderCell({ date, diary }) {
  if (date === 0) {
    return <Td className="empty"></Td>;
  }

  if (!diary) {
    return <Td>{date}</Td>;
  }

  const getAchieveCount = ({ todos }) => {
    const isChecked = (todo) => todo.checked;

    return todos.filter(isChecked).length;
  };

  const achieveCount = getAchieveCount(diary);
  const color = getAchieveColor(achieveCount);

  return <Td color={color}>{date}</Td>;
}

export default CalenderCell;

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
