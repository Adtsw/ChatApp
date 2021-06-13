import React from "react";

import "./Input.css";

function Input({ message, setMessage, sendMessages }) {
  return (
    <form className="form">
      <input
        className="input"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessages(e) : null)}
      />
      <button className="send" onClick={(e) => sendMessages(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;
