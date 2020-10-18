import React from 'react';
import { CropList } from './CropList';
import { Hero } from './Hero';

// TODO: move main content to layout when routing gets introduced
export const Home = () => {
  return (
    <>
      <Hero />
      <CropList />
    </>
  );
};
