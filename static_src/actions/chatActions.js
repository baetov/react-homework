import { normalize } from 'normalizr';
import { CALL_API, getJSON } from 'redux-api-middleware';
import { chats } from '../utils/schemas';


export const START_CHATS_LOADING = '@@message/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@message/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@message/ERROR_CHATS_LOADING';

export const loadChats = () => ({
    [CALL_API]: {
        credentials: 'include',
        endpoint: '/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats]),
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    },
});


export const ADD_CHAT = '@@test/ADD_CHAT';

export const addChat = () => ({
    type: ADD_CHAT,
});