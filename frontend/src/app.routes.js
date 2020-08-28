import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Playlists from './Pages/Playlists';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/"/>
      <Route component={Playlists} exact path="/playlist"/>
    </BrowserRouter>
  );
}

export default AppRoutes;