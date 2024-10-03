import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import './App.css';
import Users from '../../constants/userData.js';

function App() {
  return (
      <div className="container">
        <div><header>
          <h1>Users</h1>
        </header></div>
        <NavigationBar/>
        <div className="cards-container">
          <Card users={Users}/>
        </div>
      </div>
  )
}

export default App;
