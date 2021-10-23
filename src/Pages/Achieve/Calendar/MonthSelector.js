import React from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import color from "constant/color";
import { getNextMonth, getPrevMonth } from "utils/date";

function MonthSelector({ date, setDate }) {
  const splitDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}. ${month}`;
  };

  const prevMonth = () => setDate(getPrevMonth(date));
  const nextMonth = () => setDate(getNextMonth(date));

  return (
    <Conatiner>
      <CountButton onClick={prevMonth}>
        <AiFillCaretLeft />
      </CountButton>
      <DatePanel>{splitDate()}</DatePanel>
      <CountButton onClick={nextMonth}>
        <AiFillCaretRight />
      </CountButton>
    </Conatiner>
  );
}

export default MonthSelector;

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1.2em;
  font-size: 20px;
  font-weight: bold;
  color: ${color.main};
`;

const DatePanel = styled.span`
  display: inline-block;
  width: 9em;
  padding: 0.7em 0;
  border-radius: 5px;
  background: ${color.main};
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 2px 2px 4px 0px rgba(50, 50, 50, 0.4);
  user-select: none;
`;

const CountButton = styled.button`
  svg {
    font-size: 22px;
    color: ${color.main};
  }
`;
