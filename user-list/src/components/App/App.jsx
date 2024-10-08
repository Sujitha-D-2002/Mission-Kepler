import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import './App.css';
import Users from '../../constants/userData.js';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Users</h1>
      </header>
      <NavigationBar />
      <div className="cards-container">
        {Users.map((user,index) => (
          <Card user={user} key={index} /> 
        ))}
      </div>
    </div>
  );
}

export default App;
