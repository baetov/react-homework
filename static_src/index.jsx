import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import initStore from './utils/store';



ReactDOM.render(
    <Provider store={ initStore([]) }>
        <BrowserRouter>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);