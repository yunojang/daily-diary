import React from "react";
import styled from "styled-components";

import color from "constant/color";

import Title from "Components/Title";
import Calendar from "./Calendar";
import AchieveInfo from "./AchieveInfo";

function AchieveApp() {
  return (
    <Container>
      <Header>
        <Title size={1.5}>Achievement</Title>
      </Header>

      <Calendar />

      <AchieveInfo />
    </Container>
  );
}

export default AchieveApp;

const Container = styled.div`
  width: 660px;
  margin: 40px auto;
`;

const Header = styled.header`
  border-bottom: 2px dashed ${color.main};
  padding-bottom: 1em;
  margin-bottom: 1.2em;
`;
