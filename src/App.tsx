import React from "react";
import { Router, Link, Route, LocationContext } from "./route";
import Card from "./components/card";
import Entry from "./components/entry";
import "./app.css";

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
              <>
                <Route path="/entry">
                  <Entry />
                </Route>
                <Route path="/card">
                  <Card />
                </Route>
              </>
            )}
          </LocationContext.Consumer>
        </Router>
      </React.Suspense>
    </>
  );
};

export default App;
