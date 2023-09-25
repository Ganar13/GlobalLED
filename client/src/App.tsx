import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Services from './components/Servies/Services';
import Contacts from './components/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App(): JSX.Element {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/сontacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
