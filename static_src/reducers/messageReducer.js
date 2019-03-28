import update from 'react-addons-update';
import { SEND_MESSAGE, REPLY_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messageList:[],
    messages: {},
    nextId: 1,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessageList = [...store.messageList, store.nextId];
            const newMessages = {...store.messages, [store.nextId]:{ text:action.text,sender: 'me'}};
            return update(store, {
                nextId: { $set: store.nextId + 1 },
                messageList: { $set: newMessageList },
                messages: { $set: newMessages },
            });
        }
        case REPLY_MESSAGE: {
            const newMessageList = [...store.messageList, store.nextId];
            const newMessages = {...store.messages, [store.nextId]:{ text:'отстань,я робот',sender: 'bot'}};
            return update(store, {
                nextId: { $set: store.nextId + 1 },
                messageList: { $set: newMessageList },
                messages: { $set: newMessages },
            });
        }
        default:
            return store;
    }
}