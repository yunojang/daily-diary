import React from "react";
import styled, { css } from "styled-components";

import useToggle from "hooks/useToggle";
import color from "constant/color";

function MenuButton(props) {
  const [show, toggle] = useToggle(false);

  return (
    <Button onClick={toggle}>
      <ButtonIcon show={show}>
        <span></span>
        <span></span>
        <span></span>
      </ButtonIcon>
    </Button>
  );
}

export default MenuButton;

const Button = styled.button`
  position: absolute;
  bottom: 2.5em;
  right: 3.5em;
  width: 3.9em;
  height: 3.9em;
  border-radius: 50%;
  background: ${color.light};
  transition: 0.15s;

  &:hover {
    background: ${color.main};
  }
`;

const ButtonIcon = styled.div`
  position: relative;
  height: 50%;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 4px;
    border-radius: 50px;
    background: #fff;
    transition: 0.3s cubic-bezier(0, 0, 0, 1);
  }
  span:nth-child(1) {
    top: 0;
    ${(props) =>
      props.show &&
      css`
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `};
  }
  span:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
    ${(props) => props.show && "opacity:0"};
  }
  span:nth-child(3) {
    bottom: 0;
    ${(props) =>
      props.show &&
      css`
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      `};
  }
`;
