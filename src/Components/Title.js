import color from "constant/color";
import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => props.size + "em" || "1em"};
  font-weight: bold;
  color: ${color.main};
  user-select: none;
`;

export default Title;
