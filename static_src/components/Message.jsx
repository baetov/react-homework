import React from 'react';
import PropTypes from 'prop-types';



export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    render() {
        return<div className={this.props.sender === 'bot' ? 'bot-message' : 'my-message'}>
            {this.props.message}
        </div>
    }
}

