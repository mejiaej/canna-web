import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { MainContent } from './components/screens/MainContent';
import { Footer, Header } from './components/layout';

export const App = () => (
  <>
    <CssBaseline />
    <Header />
    <MainContent />
    <Footer />
  </>
);
