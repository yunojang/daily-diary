import React from "react";
import styled from "styled-components";

function CalenderTbody({ matrix }) {
  const createCell = (cell, idx) => {
    const content = cell === 0 ? "" : cell;

    return (
      <td key={idx} className={cell === 0 ? "empty" : ""}>
        {content}
      </td>
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
  td {
    border: 1px solid #ccc;
    width: 6em;
    height: 5em;
    padding: 0.2em;
    font-weight: bold;
    font-size: 15px;
    vertical-align: top;
    text-align: start;
  }

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
