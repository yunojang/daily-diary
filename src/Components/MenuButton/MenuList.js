import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { HiOutlineBan as WaitIcon } from "react-icons/hi";

import color from "constant/color";
import ROUTE_PATH from "constant/routePath";
import { ARCHIEVE_LINK_STATE, HOME_LINK_STATE } from "./constant/linkState";

function MenuList({ show, toggle }) {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const [link, setLink] = useState(ARCHIEVE_LINK_STATE);

  useEffect(() => {
    switch (currentPath) {
      case ROUTE_PATH.home:
        setLink(ARCHIEVE_LINK_STATE);
        break;
      case ROUTE_PATH.achieve:
      default:
        setLink(HOME_LINK_STATE);
    }
  }, [currentPath]);

  return (
    <List className={show ? "show" : "hide"}>
      <MenuLi delay={0} className={show ? "show" : "hide"}>
        {show && (
          <Link to={link.path} onClick={toggle}>
            {link.icon}
          </Link>
        )}
      </MenuLi>

      <MenuLi delay={0.1} className={show ? "show" : "hide"}>
        <WaitIcon />
      </MenuLi>
    </List>
  );
}

export default MenuList;

const List = styled.ul`
  position: absolute;
  bottom: 100px;
  right: 54px;

  display: flex;
  flex-direction: column-reverse;
  gap: 4px;
`;

const MenuLi = styled.li`
  width: 53px;
  height: 53px;
  border: 3px solid ${color.light};
  background: white;
  border-radius: 50%;
  color: ${color.light};
  text-align: center;

  transition: 0.15s;
  transition-delay: ${(props) => `${props.delay}s;`};

  &.show {
    transform: translateY(0);
    opacity: 1;
  }
  &.hide {
    transform: translateY(20px);
    opacity: 0;
  }
  &:active {
    background: #f5f5f5;
  }

  svg {
    position: relative;
    top: 4px;
    font-size: 38px;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
