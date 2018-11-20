import React, { Component } from 'react'

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
    const { name } = this.props
    return (
      <div>
        <ul>
          Family Name: {name}
        </ul>
      </div>
    )
  }
}

export default Family
