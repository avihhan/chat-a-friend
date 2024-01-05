// import React, { useEffect, useState, useRef } from "react"
// import './App.css';

// function Information({ socket, username, room, serverResponse }) {

//     const [infoList, setInfoList] = useState([]);

//     const connectionInfo = () => {
        
//     }

//     const exitRoom = () => {
//         socket.emit('leave_room', room, (response) => {
//             if (response.status === 'disconnected') {
//                 setShowChat(false);
//                 console.log(username, ' left room: ', response.room);
//             } else {
//                 console.log('Failed to leave the room.');
//             }
//         });
//     }

//     useEffect(() => {
//         const handleReceiveMessage = (data) => {
//             console.log(data);
//             // handle data here -> message details present here.
//             setMessageList((list) => [...list, data]);
//             console.log("message list", messageList);
//         };
//         socket.on("recieve_message", handleReceiveMessage);
//         return () => {
//             // Cleanup: Unsubscribe from the socket event when the component unmounts
//             socket.off("recieve_message", handleReceiveMessage);
//         };
//     }, [socket]);

//     const chatBodyRef = useRef();
//     useEffect(() => {
//         // Scroll to the bottom when messageList changes
//         if (chatBodyRef.current) {
//             chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//         }
//     }, [messageList]);

//     return (
//         <div className="chat-window">
//             <div className="chat-header">
//                 <p>Live Chat</p><button onClick={exitRoom} className="exit-button">X</button>
//             </div>
//             <div ref={chatBodyRef} className="chat-body">
//                 {messageList.map((messageContent) => {
//                     return (
//                         <div className="message" id={username === messageContent.author ? "you" : "other"}>
//                             <div>
//                                 <div className="message-content">
//                                     <p>{messageContent.message}</p>
//                                 </div>
//                                 <div className="message-meta">
//                                     <p>{messageContent.time}</p>
//                                     <p>_{messageContent.author}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//             <div className="chat-footer">
//                 <input
//                     type="text"
//                     placeholder="Hey there!.."
//                     value={currentMessage}
//                     onChange={(event) => { setCurrentMessage(event.target.value); }}
//                     onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); sendMessage(); } }}
//                 />
//                 <button onClick={sendMessage}>
//                     &#9658;
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Information





