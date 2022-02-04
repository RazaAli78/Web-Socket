import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";
import {sendWS} from '../utils/websocket.js';
import {messReceiver} from "../utils/util.js";

export const getMessageType = async (message) => {
  if(message.messageType == "message"){
    newMessage(message)
  } 
}     

export const newMessage = async (message) => {
  try{  
    let findChat;
    let newChat;
    var receiver =await messReceiver(message.users , message.sender)
    if (message.conversationType == "simple"){
      findChat = await Chat.findOne({
        users: { $all: message.users },
        conversationType: message.conversationType,
      });
    } else if (message.conversationType == "product"){
      findChat = await Chat.findOne({
        users: { $all: message.users },
        conversationType: message.conversationType,
        product:message.product,
      });
    }
    
    if(!findChat){
      newChat = new Chat({
        users:message.users,
        product:message.product,
        conversationName:message.conversationName || '',
        conversationType: message.conversationType,
        lastMessage: new Date(),
      });
      await newChat.save();  
    }

    let newMessage = new Message({
      message:message.message,
      sender: message.sender,
      chatId: newChat ? newChat['_id'] : findChat._id,
      product: message.product,
      messageType: message.messageType,
      seen_by: message.sender,
    });
    await newMessage.save();
    sendWS(receiver , newMessage)
  }catch (e) {
     console.log(e);
     return e;
  }  
}  





