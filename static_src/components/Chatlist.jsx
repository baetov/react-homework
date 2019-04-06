import React from 'react';
import { push } from 'react-router-redux';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import AddIcon from 'material-ui/svg-icons/content/add';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { addChat, loadChats } from '../actions/chatActions';


class ChatList extends React.Component {
    static propTypes = {
        chatList: PropTypes.arrayOf(PropTypes.number).isRequired,
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        loadChats: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadChats();
    }

    handleAddChat = (e) => {
        this.props.addChat();
    };

    handleLink = (link) => {
        this.props.push(link)
    };

    render() {
        const { chatList, chats } = this.props;
        const chatComponents = chatList.map((chatId, index) =>
            <ListItem
                primaryText={ chats[chatId].name }
                leftIcon={<ContentInbox />}
                onClick={ () => this.handleLink(`/chat/${chatId}/`) }
            />
        );

        return (
            <List>
                { chatComponents }
                <ListItem
                    primaryText='Добавить новый чат'
                    leftIcon={ <AddIcon /> }
                    onClick={ this.handleAddChat }

                />
            </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chatList: chatReducer.chatList,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, loadChats, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);