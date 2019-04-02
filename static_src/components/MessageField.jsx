import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import TextField from 'material-ui/TextField';
import Message from './Message';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import { sendMessage, replyMessage } from '../actions/messageActions';
import '../styles/messages.scss';


class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        nextId:PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        replyMessage: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
    };
    static defaultProps = {
        nextId: 1,
        chatId: 1,
    };

    state = {
        input: '',
    };

    componentDidUpdate(prevProps) {
        const {messages,messageList,nextId } = this.props;
        const lastMessageSender = messages[nextId - 1] ?  messages[nextId - 1].sender : '';
        if (prevProps.messageList.length < messageList.length && lastMessageSender === 'me') {
            setTimeout(this.handleReply, 500);
        }
    };

    handleSendMessage = () => {
        const { chatId,nextId} = this.props;
        this.props.sendMessage(chatId,nextId, this.state.input);
        this.setState({ input: '' });
    };


    handleReply = () => {
        const { chatId,nextId} = this.props;
       this.props.replyMessage(nextId, chatId);
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };


    handleKeyUp = (evt) => {
        if (evt.keyCode === 13){
            this.handleSendMessage()
        }
    };

    render() {
        const {messages,chats,chatId} = this.props;

        const messageComponents = chats[chatId].messageList.map((messageId, index) =>
            <Message
                key={ index }
                message={messages[messageId].text}
                sender={messages[messageId].sender}
            />
        );

        return (
            <div>
                <div className="message-field">
                    { messageComponents }
                </div>
                <div className="enter-message">
                <TextField
                    hintText="сообщение"
                    name="input"
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

const mapStateToProps = ({ messageReducer,chatReducer}) => ({
    messageList: messageReducer.messageList,
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, replyMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
