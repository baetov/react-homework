import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui/svg-icons/content/add';
import {addChat} from '../actions/chatActions';



class ChatList extends React.Component{
    static propTypes = {
        chats: PropTypes.object.isRequired,
        chatList: PropTypes.arrayOf(PropTypes.number).isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };

    handleAddChat = (e) => {
       this.props.addChat();
    };

    handleLink = (link) =>{
        this.props.push(link)
    };


    render() {
        const {chatList,chats} = this.props;
        const chatComponents = chatList.map((chatId, index) =>
                <ListItem
                    primaryText={chats[chatId].name}
                    leftIcon={<ContentInbox />}
                    onClick={() => this.handleLink(`/chat/${chatId}/`)}
                />

        );


        return (
            <List>
                {chatComponents}
                <ListItem
                    primaryText={'добавить чат'}
                    leftIcon={<AddIcon />}
                    onClick={this.handleAddChat}
                />
            </List>
        )
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chatList: chatReducer.chatList,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);