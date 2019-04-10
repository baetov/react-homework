import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/layout.scss';
import PropTypes from "prop-types";


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatIdId: 1,
    };

    render() {
        return (
            [
                <Header key="header" />,
                <div key="layout" className="layout">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
            ]
        )
    }
}