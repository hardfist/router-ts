import React from "react";
import { Router, Link, Route, LocationContext } from "./route";
import Card from "./components/card";
import Entry from "./components/entry";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './app.css';

const App: React.FC = () => {
  return (
    <>
      <React.Suspense
        fallback={() => {
          return <div>loading....</div>;
        }}
      >
        <Router>
          <Link href="/entry">entry</Link>
          <Link href="/card">card</Link>
          <LocationContext.Consumer>
            {({ url }) => (
              <TransitionGroup>
                <CSSTransition key={url} timeout={300} classNames="fade">
                  <>
                    <Route path="/entry">
                      <Entry />
                    </Route>
                    <Route path="/card">
                      <Card />
                    </Route>
                  </>
                </CSSTransition>
              </TransitionGroup>
            )}
          </LocationContext.Consumer>
        </Router>
      </React.Suspense>
    </>
  );
};

export default App;
