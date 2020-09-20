import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainContent  } from "./MainContent";

export const MainLayout = () => (
  <>
    <CssBaseline />
    <Header />
    <main>
      <MainContent />
    </main>
    <Footer />
  </>
);
