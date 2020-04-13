import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ title, movieTitle }) => {
  return (
    <header>
      <NavStyled>
        <LinkStyled to='/'>홈으로</LinkStyled>
      </NavStyled>
      {title === "home" && <TitleStyled>무비리스트</TitleStyled>}
      {title === "detail" && <TitleStyled>{movieTitle}</TitleStyled>}
    </header>
  );
};

const TitleStyled = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const NavStyled = styled.div`
  padding: 10px 10%;
  background-color: #e2e2e2;
  overflow: hidden;
`;

const LinkStyled = styled(Link)`
  float: right;
  color: black;
  text-decoration: none;
  outline: none;
  :hover {
    color: red;
  }
`;

export default Header;
