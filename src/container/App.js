import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Top from '../components/Top'
import { showWill , showHave , initSup ,initPro , updateSupStatus , changeSupStatus , changeProStatus } from '../actions/actions'
import './App.less'
import { Router, Route, Link , browserHistory } from 'react-router'

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    loading: state.loading,
    showTab: state.showTab,
    supData: state.supData,
    proData: state.proData,
    nowSupStatus: state.nowSupStatus
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onElseClick: () => dispatch(elseAction()),
    onShowWill: () => dispatch(showWill()),
    onShowHave: () => dispatch(showHave()),
    initSup: () => dispatch(initSup()),
    initPro: (name) => dispatch(initPro(name)),
    updateSupStatus: (data) => dispatch(updateSupStatus(data)),
    changeSupStatus: (supName) => dispatch(changeSupStatus(supName)),
    changeProStatus: (number) => dispatch(changeProStatus(number))
  }
}

// React component counter
class App extends Component {
  render() {
    const { value, onIncreaseClick, onElseClick, bb ,loading , showTab} = this.props
    return (
      <div>
      	{this.props.children && React.cloneElement(this.props.children, {
              onShowWill: this.props.onShowWill,
              onShowHave: this.props.onShowHave,
              initSup: this.props.initSup,
              showTab: this.props.showTab,
              supData: this.props.supData,
              initPro: this.props.initPro,
              proData: this.props.proData,
              nowSupStatus: this.props.nowSupStatus,
              updateSupStatus: this.props.updateSupStatus,
              changeSupStatus: this.props.changeSupStatus,
              changeProStatus: this.props.changeProStatus
            })}
        <Loading loading={loading}></Loading>
        <Top></Top>
      </div>
    )
  }
}

App.propTypes = {
  loading:PropTypes.bool.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onElseClick: PropTypes.func.isRequired
}

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)