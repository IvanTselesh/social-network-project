import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />
      <Navbar />
      <RootRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;
