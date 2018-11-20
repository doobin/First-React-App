import React, { Component } from 'react'
import Member from './Member.js'
import './Family.scss'

class Family extends Component {
  constructor (props) {
    super(props)

    this.state = {
      liked: false,
      hidden: false
    }

    // This binding is necessary to make `this` work in the callback
    this.toggleLiked = this.toggleLiked.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleLiked() {
      this.setState({
        liked: !this.state.liked
      })
    }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render () {
    const { name, people } = this.props
    const { liked, hidden } = this.state
    return (
      <div>
        <h4 className={liked ? 'liked' : ''}> Family Name: {name}</h4>
        <button onClick={this.toggleLiked}>{liked ? 'Unlike' : 'Like'}</button>
        <p>Members: </p>
        <button onClick={this.toggleHidden}>{hidden ? 'Show' : 'Hide'}</button>
        <ul className={hidden ? 'hidden' : ''}>
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
