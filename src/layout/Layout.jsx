import React from "react";
import Header from "./Header";

import styled from "styled-components";

const Layout = ({ title, movieTitle, children }) => {
  return (
    <>
      <Header title={title} movieTitle={movieTitle} />
      <WrapStyled> {children}</WrapStyled>
    </>
  );
};

const WrapStyled = styled.div`
  margin: 0 10%;
`;

export default Layout;
