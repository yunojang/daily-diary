import color from "constant/color";
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

  const memo = diary.memo.trim();

  return (
    <Td color={color} className={memo ? "memo" : ""}>
      {memo && <Sticker />}
      <span>{date}</span>

      {memo && (
        <ArrowBox>
          {memo.length > 30 ? `${memo.slice(0, 30)}...` : memo}
        </ArrowBox>
      )}
    </Td>
  );
}

export default CalenderCell;

const Td = styled.td`
  position: relative;
  border: 1px solid #ccc;
  width: 6em;
  height: 5em;
  padding: 0.2em;
  font-weight: bold;
  font-size: 15px;
  vertical-align: top;
  text-align: start;
  background: ${(props) => props.color};

  &:hover p {
    display: block;
  }
`;

const Sticker = styled.div`
  position: absolute;
  top: 0.2em;
  right: 0;
  width: 1.2em;
  height: 0.6em;
  background: #ffdd44;
`;

const ArrowBox = styled.p`
  display: none;
  position: absolute;
  right: -0.5em;
  padding: 4px 7px;
  background: ${color.light};
  color: #fff;
  font-size: 13px;
  font-weight: normal;
  z-index: 2;
  cursor: default;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 0.7em;
    border: 6px solid transparent;
    border-bottom-color: ${color.light};
  }
`;
