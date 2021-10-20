import styled from "styled-components";
import color from "constant/color";

const ToggleButton = styled.button`
  width: 100%;
  height: 2em;
  position: relative;
  background: ${color.bright};

  span {
    position: absolute;
    width: 0.8em;
    height: 2px;
    border-radius: 30px;
    background: ${color.light};
    left: 50%;
    transition: 0.3s cubic-bezier(0, 0, 0, 1);
  }
  span:nth-child(1) {
    transform: translateX(-66%)
      rotate(${(props) => (props.summarize ? "45deg" : "-45deg")});
  }
  span:nth-child(2) {
    transform: rotate(${(props) => (props.summarize ? "-45deg" : "45deg")});
  }
`;

export default ToggleButton;
