import React from "react";

import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <HeaderStyled title={title}>
      <div>타이틀</div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export default Header;
