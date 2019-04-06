export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (chatId, messageId, text) => ({
    type: SEND_MESSAGE,
    chatId,
    messageId,
    text,
});

export const REPLY_MESSAGE = '@@message/REPLY_MESSAGE';

export const replyMessage = (chatId, messageId) => ({
    type: REPLY_MESSAGE,
    chatId,
    messageId,
});