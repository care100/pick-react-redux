import React, { Component, PropTypes } from 'react'
import './Top.less'

//class Loading extends Component {
var Top = React.createClass({
  scrollTop() {
  	scroll(0,0);
  },

  render() {
    return (
      <div className="to-top" onClick={this.scrollTop}>&lt;</div>
    )
  }
})

export default Top