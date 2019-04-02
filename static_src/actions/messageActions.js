export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = ( chatId,messageId, text) => ({
    type: SEND_MESSAGE,
    text,
    messageId,
    chatId
});

export const REPLY_MESSAGE = '@@message/REPLY_MESSAGE';

export const replyMessage = (messageId,chatId) => ({
    type: REPLY_MESSAGE,
    chatId,
    messageId,

});