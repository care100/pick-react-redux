import React, { Component, PropTypes } from 'react'
import './Loading.less'

//class Loading extends Component {
var Loading = React.createClass({
  render() {
    return (
      <div className={this.props.loading?'loading-box show-loading':'loading-box'}>
      	<div className="loading"></div>
      	<div className="loading-text">加载中</div>
      </div>
    )
  }
})

export default Loading