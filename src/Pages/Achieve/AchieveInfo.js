import React from "react";
import styled from "styled-components";

import color from "constant/color";
import degree from "./utils/degree";

function AchieveInfo() {
  return (
    <Container>
      <Ul>
        {degree.map(({ color, range }, i) => (
          <List key={i} color={color}>
            <div></div>
            <span>
              {range[0]} ~ {range[range.length - 1]}
            </span>
          </List>
        ))}
      </Ul>

      <Mark>(완료 개수)</Mark>
    </Container>
  );
}

export default AchieveInfo;

const Container = styled.div`
  position: absolute;
  bottom: 42px;
  left: 54px;
`;

const Mark = styled.div`
  font-size: 12px;
  text-align: end;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: ${color.main};
  margin-bottom: 0.5em;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8em;

  div {
    width: 1em;
    height: 1em;
    border: 1px solid ${color.main};
    ${(props) => `background:${props.color}`};
  }
`;
