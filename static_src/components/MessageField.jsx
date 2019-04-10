import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import { sendMessage } from '../actions/messageActions';
import Message from './Message';
import '../styles/messages.scss';

class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        nextId: 1,
        chatId: 1,
    };

    state = {
        input: '',
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = () => {
        const { chatId, nextId } = this.props;
        this.props.sendMessage(chatId, nextId, this.state.input);
        this.setState({ input: '' });
    };

    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) { // Enter
            this.handleSendMessage();
        }
    };

    render() {
        if (this.props.isLoading) {
            return <div>Загрузка...</div>
        }

        const { chats, chatId,  messages } = this.props;

        const messageComponents = chats[chatId].messages.map((messageId, index) =>
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        );

        return (
            <div>
                <div className="message-field">
                    { messageComponents }
                </div>
                <div>
                    <TextField
                        name="input"
                        hintText="Hint Text"
                        value={ this.state.input }
                        onChange={ this.handleInput }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton onClick={ this.handleSendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
    messageList: messageReducer.messageList,
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);