import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/messages.scss';


export default class MessageField extends React.Component {
    state = {
        curId: 1,
        messageList: [],
        messages: {},
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages,messageList,curId} = this.state;
        const lastMessageSender = messages[curId - 1] ? messages[curId - 1].sender : '';
        if (prevState.messageList.length < messageList.length && lastMessageSender === 'me') {
            setTimeout(this.handleReplyMessage,500);
        }
    };
    componentDidMount(){
        this.handleReplyMessage()
    };
    handleKeyUp = (evt) => {
        if (evt.keyCode === 13){
            this.handleSendMessage()
        }
    };

    handleSendMessage = () => {
        const {messages,messageList,curId,input} = this.state;
        if (input.length > 0){
            const newMessageList = [...messageList,curId];
            const newMessages = {...messages,[curId]:{text:input,sender: 'me'}};
            messages[this.state.curId] = { sender: 'me', message: this.state.input };
            this.setState({messages:newMessages, messageList:newMessageList, curId:curId + 1,input:''});
        }

    };

    handleReplyMessage = () => {
        const {messageList,messages,curId} = this.state;
        const newMessageList = [...messageList,curId];
        const newMessages = {...messages,[curId]:{text:'отстань я робот', sender:'bot'}};
        this.setState({ messageList:newMessageList, messages:newMessages, curId: curId +1});
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        const {messages,messageList}= this.state;
        const messageComponents = messageList.map((messageId,index) =>
            <Message
                key='index'
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />
        );

        return (
            <div>
                <div className="message-field">
                    {messageComponents}
                </div>
                <div style={{textAlign:'center'}}>
                    <TextField
                        hintText="Hint Text"
                        name='input'
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