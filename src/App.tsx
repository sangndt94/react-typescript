import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from './routes';
function App() {
  const _renderRoute = () => {
    return Routes.map((item,index) => <Route key={index} exact path={item.path} component={item.component} />)
  }
  return (
      <BrowserRouter>
        {_renderRoute()}
      </BrowserRouter>
  );
}

export default App;
