import React, { Component } from 'react'
import gameOfThronesHouses from './GOTHousesData.js'
import './Family.scss'

class Family extends Component {
  render () {
    return (
      <div>
        <h4> Family Name: </h4>
        <ul>
        {gameOfThronesHouses.map(house => (
          <Family
            key={house.id}
            name={house.name}
          />
        ))}
        </ul>
      </div>
    )
  }
}

export default Family
