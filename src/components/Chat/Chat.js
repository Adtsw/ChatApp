import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket"] });

    setName(name);
    setRoom(room);

    //console.log(socket);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.on("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //function for sending messages
  const sendMessages = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />

          <Messages messages={messages} name={name} />

          <Input
            message={message}
            setMessage={setMessage}
            sendMessages={sendMessages}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
