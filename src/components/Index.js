import React, { Component, PropTypes } from 'react'
import { Router, Route, Link , browserHistory } from 'react-router'
import { connect } from 'react-redux'

//class Index extends Component {
var Index = React.createClass({
  componentWillMount () {
    this.props.initSup()
  },
  render() {
  	const { onShowWill , onShowHave , showTab , supData , updateSupStatus } = this.props;
    return (
    	<div>
    		<h3>拣货单</h3>
	        <div className="tab-box">
	        	<p className={showTab == 'will'?"sups-active":''} onClick={onShowWill}>未拣货商家</p>
	        	<p className={showTab == 'have'?"sups-active":''} onClick={onShowHave}>已拣货商家</p>
	        </div>
	        <ul className={showTab == 'will'?"show-tab sup-list":'sup-list'}>
	        	
	        	{
                    supData.map(function (item) {
                    	if (item.jianhuo === 0) {
                        	return <li key={item.name}>
						            <Link to={"/sup/"+item.name} onClick={() => updateSupStatus(item.jianwan)}>
						            	<span className="sup-name">{item.name}</span>
						            	<span className="sup-addr">{item.addr}</span>
						            </Link>
					        	</li>
					    }
                    })
                }
	        </ul>
	        <ul className={showTab == 'have'?"show-tab sup-list":'sup-list'}>
	        	{
                    supData.map(function (item) {
                    	if (item.jianhuo === 1) {
                        	return <li className={item.jianwan?'sup-yijianwan':'sup-weijianwan'} key={item.name}>
						            <Link to={"/sup/"+item.name} onClick={() => updateSupStatus(item.jianwan)}>
						            	<span className="sup-name">{item.name}</span>
						            	<span className="sup-addr">{item.addr}</span>
						            </Link>
					        	</li>
					    }
                    })
                }
	        </ul>
		</div>
    )
  }
})

Index.propTypes = {
  
}

export default Index