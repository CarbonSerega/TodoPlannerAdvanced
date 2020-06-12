import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Main} from "./pages/Main";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {ToastState} from "./context/toast/ToastState";

function App() {
  return (
      <ToastState>
          <BrowserRouter>
            <Navbar/>
            <div className="app pt-3 pl-3">
              <Switch>
                <Route path={'/'} exact component={Main}/>
                <Route path={'/about'}  component={About}/>
              </Switch>

            </div>
          </BrowserRouter>
      </ToastState>
  );
}

export default App;
