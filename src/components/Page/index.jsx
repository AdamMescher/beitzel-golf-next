import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import StyledPage from './styled';
import Meta from '../Meta';
import Header from '../Header';
import Inner from '../Inner';
import Footer from '../Footer';
import theme from '../../theme';


const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export default Page;
