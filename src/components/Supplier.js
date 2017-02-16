import React, { Component, PropTypes } from 'react'
import { Router, Route, Link , browserHistory } from 'react-router'

//class Tips extends Component {
var Supplier = React.createClass({

	componentWillMount () {
    const name = this.props.params.id;
    this.props.initPro(name)
  },

  render() {
    const name = this.props.params.id;
    const  { proData , nowSupStatus ,changeSupStatus , changeProStatus } = this.props;

    return (
      <div>
      	<h3 className="sup-title">
          <span className="back-index"><Link to="/">&lt;</Link></span>
          <span className="sup-name-t">{name}</span>

          <span className={nowSupStatus?'sta-jian-sup':'btn-jian-sup'} >{nowSupStatus?'已拣':'未拣'}</span>
        </h3>
        <table>
          <thead>
            <tr>
              <th>货号</th>
              <th>颜色/尺码</th>
              <th>数量</th>
              <th>单价</th>
              <th>单号</th>
              <th>电话</th>
              <th>操作/状态</th>
            </tr>
          </thead>
          <tbody>

            {
              proData.map(function (item , index) {
                return <tr key={item.id}>
                    <td>{item.num}</td>
                    <td>{item.color}</td>
                    <td>{item.numbers}</td>
                    <td>{item.price}</td>
                    <td>{item.order}</td>
                    <td><a href={'tel:' + item.phone}>{item.phone}</a></td>
                    <td>{item.status == 0?<button onClick={() => {changeProStatus([item,index,proData])}}>拣货</button>:'已拣货'}</td>
                  </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})

export default Supplier