
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store.js'
import { HashRouter,Route,Switch } from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
ReactDOM.render(
	<Provider store={ store }>
		<HashRouter>
			<Switch>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route component={Main} />
			</Switch>
		</HashRouter>
	</Provider>
,document.getElementById('root'))

