import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import SignIn from './Components/signin';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={SignIn}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>

    </BrowserRouter>
  );
}

export default App;
