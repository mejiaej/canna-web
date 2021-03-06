import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { CROP_PATH, HOME_PATH } from '../../config/paths';
import { Crop } from '../screens/crop/Crop';
import { Home } from '../screens/home/Home';

export const MainContent = () => (
  <BrowserRouter>
    <Switch>
      <Route path={`${CROP_PATH}/:id`} component={Crop} />
      <Route exact path={HOME_PATH} component={Home} />
    </Switch>
  </BrowserRouter>
);
