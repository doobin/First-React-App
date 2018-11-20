import React from 'react';
import './App.css';
import gameOfThronesHouses from './GOTHousesData.js'
import Family from './Family.js'


const App = (props) => (
  <div>
    <h1>Game of Thrones</h1>
    {gameOfThronesHouses.map(house => (
      <Family
        key={house.id}
        name={house.name}
        people={house.people}
      />
    ))}
  </div>
)

export default App;
