import { SEND_MESSAGE, REPLY_MESSAGE, replyMessage } from '../actions/messageActions';
import { HIGHLIGHT_CHAT, highlightChat, unhighlightChat } from '../actions/chatActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            setTimeout(() =>
                store.dispatch(replyMessage(action.chatId, store.getState().messageReducer.nextId)), 1000);
            break;
        case REPLY_MESSAGE:
            store.dispatch(highlightChat(action.chatId));
            setTimeout(() => store.dispatch(unhighlightChat()), 500);
            break;
    }
    return next(action);
}