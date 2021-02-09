import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Game } from "../Containers/Game/Game";
import { Start } from "../Containers/Start/Start";
// import { Container } from './styles';

export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Start} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
};
