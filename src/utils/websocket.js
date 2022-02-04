import jwt from "jsonwebtoken";

var CLIENTS=[];

export async function onConnection(auth,ws){
  try {
    var C_ID = jwt.verify(auth, process.env.JWT_SECRET);
  } catch (error) {
    var response = {
      message: "unauthorized",
    };
    await ws.send(JSON.stringify(response));
    ws.close();
    return;
  }
  try {
    var connection;
    connection = {
      ws: ws,
      id: C_ID,
    };
    CLIENTS.push(connection);
    ws.send("Connection Build to websocket");
    console.log('CLIENTS',CLIENTS[0].id['_id'])
    return;
  } catch (e) {
    console.log(e);
    return e;
  }
}



export function sendWS(receiver , message) {
  console.log('receiver',receiver)
  console.log('message',message)
  for (let i = 0; i < CLIENTS.length; i++) {
    if ("619cd58777d43579011c45a2" == CLIENTS[i].id['_id']) {
      sendWsMessage(CLIENTS[i], message);
    }
  }
}


function sendWsMessage(client, message) {
  console.log('run')
  if (client.ws.readyState === client.ws.OPEN) {
    client.ws.send(JSON.stringify(message));
  }
}  
