import Title from "Components/Title";
import color from "constant/color";
import React from "react";
import styled from "styled-components";

function Memo({ memo, setMemo }) {
  return (
    <div>
      <Header>
        <Title size={1.2}>Memo</Title>
      </Header>

      <Textarea
        spellCheck="false"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
    </div>
  );
}

export default Memo;

const Header = styled.header`
  margin-bottom: 1em;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 8em;
  resize: none;
  outline: none;
  padding: 0.5em;
  border: 1px solid ${color.main};
  line-height: 1.5em;
`;
