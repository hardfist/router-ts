import React from 'react';
import { Router, Link, Route}  from './route';

const App: React.FC = () => {
  return (
    <>
    hello
    <Router>
      <Link href="/path" >path</Link>
      <Link href="/entry">entry</Link>
      <Route path="/path">this is a path </Route>
      <Route path="/entry">this is a entry</Route>
    </Router>
    </>
  );
}

export default App;
