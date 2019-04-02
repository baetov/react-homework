import update from 'react-addons-update';
import { SEND_MESSAGE,REPLY_MESSAGE } from '../actions/messageActions';
import {ADD_CHAT} from '../actions/chatActions';

const initialStore = {
    chatList: [1,2],
    chats: {1:{name:'chat1',messageList:[]},2:{name:'chat2',messageList:[]}},
    nextChatId: 3,
};

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {

            return update(store, {
                chats: {$merge:{[action.chatId]:{
                            name: store.chats[action.chatId].name,
                            messageList:[...store.chats[action.chatId].messageList,action.messageId]
                        }}},
            });
        }
        case REPLY_MESSAGE: {

            return update(store, {
                chats: {$merge:{[action.chatId]:{
                            name: store.chats[action.chatId].name,
                            messageList:[...store.chats[action.chatId].messageList,action.messageId]
                        }}},
            });
        }
        case ADD_CHAT: {
            const newChatList = [...store.chatList, store.nextChatId];
            return update(store, {
                chats: { $merge: {[store.nextChatId]:{ name:`chat${store.nextChatId}`,messageList:[]} }},
                chatList: {$set: newChatList},
                newChatId: {$set: store.nextChatId + 1},
            });
        }
        default: return store;
    }
}
