import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Provider makes the Redux store available as a property to all child components it wraps
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream/index';
import App from './components/App';
import Callback from './components/Callback';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

// const tracks = [
//   {
//     title: 'Some track'
//   },
//   {
//     title: 'Some other track'
//   },
//   {
//     title: 'A third track'
//   }
// ];

const store = configureStore();
// store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store ={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Stream}/>
				<Route path='/' component={Stream}/>
				<Route path='/callback' component={Callback}/>
			</Route>
		</Router>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
