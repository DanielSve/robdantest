import './App.css';
import React from 'react';
import { useState } from 'react';
import NamePlate from './components/NamePlate';

const App = () => {
  const [showAge, setShowAge] = useState(true);
  const [user, setUser] = useState({
    name: 'Robert',
    age: 38,
  });

  console.log('hej');

  return (
    <div className='App'>
      <NamePlate user={user} showAge={showAge} />
      {user.name}
      <h1>Welcome {user.name}</h1>
      <p>You are {showAge && user.age} years old</p>
    </div>
  );
};

export default App;
