import React, { Component } from 'react'
import Member from './Member.js'

class Family extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hidden: false
    }

    // This binding is necessary to make `this` work in the callback
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render () {
    const { name, people } = this.props
    return (
      <div>
        <h4>Family Name: {name}</h4>
        <ul>
          {people.map(member => (
            <Member
              key={member.name}
              name={member.name}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Family
