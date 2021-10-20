import React from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { getNextDate, getPrevDate } from "utils/date";
import color from "constant/color";

function DateSelector({ date, setDate }) {
  const splitDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}. ${month}. ${day}`;
  };

  const setPrevDate = () => setDate(getPrevDate(date));
  const setNextDate = () => setDate(getNextDate(date));
  const setToday = () => setDate(new Date());

  return (
    <Container>
      <button className="counter" onClick={setPrevDate}>
        <AiFillCaretLeft />
      </button>

      <DatePanel>{splitDate()}</DatePanel>

      <button className="counter" onClick={setNextDate}>
        <AiFillCaretRight />
      </button>

      <TodayButton onClick={setToday}>Today</TodayButton>
    </Container>
  );
}

export default DateSelector;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  position: relative;
  margin-bottom: 14px;

  button {
    /* color: ${color.main}; */
  }
  button.counter {
    font-size: 20px;
  }
`;

const DatePanel = styled.span`
  display: inline-block;
  width: 180px;
  padding: 11px 0;
  border-radius: 5px;
  background: ${color.main};
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 2px 2px 4px 0px rgba(50, 50, 50, 0.4);
  user-select: none;
`;

const TodayButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  font-weight: bold;
  background: ${color.bright};
  padding: 4px 10px;
  border-radius: 5px;
`;
