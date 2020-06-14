import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Main} from "./pages/Main";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {ToastState} from "./context/toast/ToastState";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
  return (
      <FirebaseState>
          <ToastState>
              <BrowserRouter>
                <Navbar/>
                <div className="app pt-3 p-3">
                  <Switch>
                    <Route path={'/'} exact component={Main}/>
                    <Route path={'/about'}  component={About}/>
                  </Switch>

                </div>
              </BrowserRouter>
          </ToastState>
      </FirebaseState>
  );
}

export default App;
