import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore , applyMiddleware , compose} from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { Router, Route, Link , browserHistory , IndexRoute } from 'react-router'

import App from './container/App.js'
import Index from './components/Index'
import Supplier from './components/Supplier'
import NotFound from './components/NotFound'

import rootReducer from './reducers/reducers.js';


// Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(function() {
  // console.log('state change');
});

ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="sup/:id" component={Supplier}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
  </Provider>,
  document.getElementById('root')
)
