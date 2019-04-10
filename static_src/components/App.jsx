import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout';
import InstallPopup from "./InstallPopup";


export default class App extends React.Component {
    componentDidMount () {
        console.log('It works!');
    }

    render() {
        return (
            [
                <InstallPopup key="popup" />,
                <Switch key='router' >
                    <Route exact path='/' component={ Layout } />
                    <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ obj.match.params.chatId } /> } />
                </Switch>
            ]
        )
    }
}