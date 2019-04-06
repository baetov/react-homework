import { SEND_MESSAGE, replyMessage } from '../actions/messageActions';


export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            setTimeout(() =>
                store.dispatch(replyMessage(action.chatId, store.getState().messageReducer.nextId)), 500);

    }
    return next(action);
}