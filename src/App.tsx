import React from "react";
import { Router, Link, Route } from "./route";
const Lazy = React.lazy(() => import("./card"));

const App: React.FC = () => {
  return (
    <>
      <React.Suspense
        fallback={() => {
          return <div>loading....</div>;
        }}
      >
        <Router>
          <Link href="/path">path</Link>
          <Link href="/entry">entry</Link>
          <Link href="/lazy">lazy</Link>
          <Route path="/path">this is a path </Route>
          <Route path="/entry">this is a entry</Route>
          <Route path="/lazy">
            <Lazy />
          </Route>
        </Router>
      </React.Suspense>
    </>
  );
};

export default App;
