import React from "react";
import styled from "styled-components";

const DAY = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

function CalenderTHead() {
  return (
    <Thead>
      <tr>
        {DAY.map((day, i) => (
          <th key={i}>{day}</th>
        ))}
      </tr>
    </Thead>
  );
}

export default CalenderTHead;

const Thead = styled.thead`
  margin-bottom: 1em;

  th:first-child {
    color: #ff5555;
  }
  th:last-child {
    color: #5588ee;
  }
`;
