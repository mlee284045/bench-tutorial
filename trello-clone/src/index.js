import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Card from './components/card';
import { store } from './redux/store';
import './css/index.css';

const Index = () => {
	return (
		<Provider store={store}>
			<Router history={ browserHistory }>
				<Route path="/" component={App} />
				<Route path="details/:cardId" component={Card} />
			</Router>
		</Provider>
	)
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);


// <IndexRoute component={Home} />