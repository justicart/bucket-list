import React from 'react';
import Nav from '../components/Nav';
import Buckets from '../components/bucket/Buckets';

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Buckets />
    </div>
  </div>
);

export default App;
