import { useState } from 'react';
import Card from '../Card/Card';
import NavigationBar from '../NavigationBar/NavigationBar';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div><header>
          <h1>Users</h1>
        </header></div>
        <NavigationBar/>
        <div className="cards-container">
          <Card />
        </div>
      </div>

    </>
  )
}

export default App;
