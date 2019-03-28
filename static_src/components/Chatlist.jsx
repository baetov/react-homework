import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {replyMessage, sendMessage} from "../actions/messageActions";


class ChatList extends React.Component{

    render() {
        return (
            <List>
                <Link to="/chat/1/"><ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /></Link>
                <Link to="/chat/2/"><ListItem primaryText="Starred" leftIcon={<ActionGrade />} /></Link>
                <Link to="/chat/3/"><ListItem primaryText="Sent mail" leftIcon={<ContentSend />} /></Link>
                <Link to="/chat/4/"><ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} /></Link>
                <Link to="/chat/5/"><ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /></Link>
            </List>
        )
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, replyMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);