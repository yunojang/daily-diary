import React from "react";
import styled from "styled-components";

import useToggle from "hooks/useToggle";
import color from "constant/color";

import MenuList from "./MenuList";

function MenuButton() {
  const [show, toggle] = useToggle(false);

  return (
    <>
      <MenuList show={show} toggle={toggle} />

      <Button onClick={toggle}>
        <ButtonIcon className={show ? "open" : "hide"}>
          <span></span>
          <span></span>
          <span></span>
        </ButtonIcon>
      </Button>
    </>
  );
}

export default MenuButton;

const Button = styled.button`
  position: absolute;
  bottom: 42px;
  right: 54px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${color.light};
  transition: 0.15s;

  &:active {
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
  }
  &.open span:nth-child(1) {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  span:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    bottom: 0;
  }
  &.open span:nth-child(3) {
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
