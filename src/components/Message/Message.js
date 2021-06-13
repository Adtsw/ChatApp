import React from "react";

import ReactEmoji from "react-emoji";

import "./Message.css";

function Message({ message: { user, text }, name }) {
  let currentUser = false;

  const trimName = name.trim().toLowerCase();

  if (user === trimName) {
    currentUser = true;
  }

  return currentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sendText pr-10">{trimName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sendText pl-10">{user}</p>
    </div>
  );
}

export default Message;
