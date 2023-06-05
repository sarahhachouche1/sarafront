import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatLobby from './pages/ChatLobby';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chatLobby" element={<ChatLobby />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
