import { useEffect, useState } from "react";

export default function AppChat() {
  const [isShow, setIsShow] = useState(false);
  const [isRoom, setIsRoom] = useState("general");
  return (
    <div>
      <label htmlFor="chat">
        Choose the chat room:
        <select name="" id="chat" onChange={(e) => setIsRoom(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Close chat" : "Open chat"}
      </button>
      {isShow && <Room isRoom={isRoom} />}
    </div>
  );
}

function Room({ isRoom }) {
  const [URL, setURL] = useState("https://localhost:1234");
  useEffect(() => {
    console.log('✅ Connecting to "' + isRoom + '" room at ' + URL + "...");
    return () => {
      console.log('❌ Disconnected from "' + isRoom + '" room at ' + URL);
    };
  }, [isRoom, URL]);
  return (
    <>
      <hr />
      <label htmlFor="URL">
        Server URL:
        <input
          type="text"
          id="URL"
          value={URL}
          onChange={(e) => {
            setURL(e.target.value);
          }}
        />
      </label>
      <h1>Welcome to the {isRoom} room!</h1>
    </>
  );
}
