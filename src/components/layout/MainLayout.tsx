import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from '../screens/home/Home';

export const MainLayout = () => (
  <>
    <CssBaseline />
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </>
);
