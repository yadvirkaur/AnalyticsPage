// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytic from './components/Analytics/Analytic';
import HeaderTag from './components/HeaderTag';
import Home from './components/Home';
import LayoutPage from './components/LayoutPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/headerTag" element={<HeaderTag />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
