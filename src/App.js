import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mercury" component={Mercury} />
      <Route exact path="/venus" component={Venus} />
      <Route exact path="/earth" component={Earth} />
      <Route exact path="/mars" component={Mars} />
      <Route exact path="/jupiter" component={Jupiter} />
      <Route exact path="/saturn" component={Saturn} />
      <Route exact path="/uranus" component={Uranus} />
      <Route exact path="/neptune" component={Neptune} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;