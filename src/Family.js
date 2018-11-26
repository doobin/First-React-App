import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import gameOfThronesHouses from './GOTHousesData.js'
import './Family.scss'

const houseName = gameOfThronesHouses.map(house => (
  <li><Link to="/:id">{house.name}</Link></li>
))

class Family extends Component {
  render () {
    return (
        <div>
          <ul>{houseName}</ul>
        </div>
    )
  }
}

export default Family
