import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import {BrowserRouter} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
import initStore from './utils/store';

const history = createHistory();
const middleWare = routerMiddleware(history);

ReactDOM.render(
    <Provider store={ initStore([middleWare]) }>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);