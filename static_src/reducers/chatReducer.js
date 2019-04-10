import update from 'react-addons-update';
import { SEND_MESSAGE, REPLY_MESSAGE } from '../actions/messageActions';
import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
    ADD_CHAT,
    HIGHLIGHT_CHAT,
    UNHIGHLIGHT_CHAT
} from '../actions/chatActions';

const initialStore = {
    chatList: [],
    // chats: {1: { name: 'chat1', messages: [] }, 2: { name: 'chat2', messages: [] }},
    chats: {},
    nextChatId: 4,
    isLoading: true,
    highlightedChat: undefined,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case START_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chatList: { $set: action.payload.result },
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                            name: store.chats[action.chatId].name,
                            messages: [...store.chats[action.chatId].messages, action.messageId]
                        } } },
            });
        }
        case REPLY_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                            name: store.chats[action.chatId].name,
                            messages: [...store.chats[action.chatId].messages, action.messageId]
                        } } },
            });
        }
        case ADD_CHAT: {
            const newChatList = [...store.chatList, store.nextChatId];
            return update(store, {
                chats: { $merge: { [store.nextChatId]: {name: `chat${store.nextChatId}`, messages: []} } },
                chatList: { $set: newChatList },
                nextChatId: { $set: store.nextChatId + 1 },
            });
        }
        case HIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: { $set: action.chatId },
            });
        }
        case UNHIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: { $set: undefined },
            });
        }
        default:
            return store;
    }
}