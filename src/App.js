import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatLobby from './pages/ChatLobby';
import Authenticate from './components/quiz/Authenticate';
import Login from './components/quiz/Login';
import Layout from './components/quiz/Layout';
import Quiz from './components/quiz/Quiz';
import Result from './components/quiz/Result';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            <Route element={<Authenticate />}>
              <Route path="/login" element={<Layout />}>
                <Route path="/login/quiz" element={<Quiz />} />
                 <Route path="/login/result" element={<Result />} />
            </Route>
        </Route>
          <Route path="chatLobby" element={<ChatLobby />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
