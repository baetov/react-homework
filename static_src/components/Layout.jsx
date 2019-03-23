import React from 'react';
import MessageField from './MessageField';
import ChatList from './Chatlist';
import '../styles/layout.scss';


export default class Layout extends React.Component{


render(){
    return (
        <div className="layout">
            <div className="header" >
                количество сообщенией :
            </div>
            <div className="layout-left-side">
              <ChatList />
            </div>
            <div className="layout-right-side">
                <MessageField />
            </div>

        </div>
    )
}
}