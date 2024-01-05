import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = async () => {
    if (username !== "" && room !== "") {

      try {
        await socket.emit("join_room", room, username);
        socket.on('join_room_member_info', (data) => {
          console.log(data);
          // use join member info as you like....

        })
        setShowChat(true);
      } catch (error) {
        console.error('Error joining room: ', error);
      }
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="User Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} setShowChat={setShowChat} showChat={showChat} />
      )}
    </div>
  );
}

export default App;