import {React,useState} from "react";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from "../components/chats/Lobby";
import Chat from "../components/chats/Chat";
import { TypedLobby } from "./TypedLobby";

const ChatLobby = () => {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
  
    const joinRoom = async (user, room) => {
      try {
        const connection = new HubConnectionBuilder()
          .withUrl("http://chatapi1-dev.eba-9dntcerg.us-east-1.elasticbeanstalk.com/chat")
          .configureLogging(LogLevel.Information)
          .build();
  
        connection.on("ReceiveMessage", (user, message) => {
          setMessages(messages => [...messages, { user, message }]);
        });
  
        connection.on("UsersInRoom", (users) => {
          setUsers(users);
        });
  
        connection.onclose(e => {
          setConnection();
          setMessages([]);
          setUsers([]);
        });
  
        await connection.start();
        await connection.invoke("JoinRoom", { user, room });
        setConnection(connection);
      } catch (e) {
        console.log(e);
      }
    }
  
    const sendMessage = async (message) => {
      try {
        await connection.invoke("SendMessage", message);
      } catch (e) {
        console.log(e);
      }
    }
  
    const closeConnection = async () => {
      try {
        await connection.stop();
      } catch (e) {
        console.log(e);
      }
    }
  
    return <div className=" mx-auto w-800">
      <TypedLobby />
     <hr className="border-solid border-1 border-gray-700" />
      {!connection
        ? <Lobby joinRoom={joinRoom} />
        : <Chat sendMessage={sendMessage} messages={messages} users={users} closeConnection={closeConnection} />}
    </div>
  }
  
  export default ChatLobby;
  