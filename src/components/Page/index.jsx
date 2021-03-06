import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import StyledPage from './styled';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';
import theme from '../../theme';


const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledPage>
      <Meta />
      <Header />
      {children}
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
