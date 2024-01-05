const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room, username) => {
        // Join the room
        socket.join(room);
        console.log(`User with ID: ${socket.id} joined Room: ${room}`);

        // Emit room member info after joining
        socket.nsp.to(room).emit("join_room_member_info", {
            user_id: socket.id,
            username: username,
            room: room,
            status: 'Connected'
        });

        // Listen for leave_room event
        socket.on('leave_room', () => {
            // Leave the room
            socket.leave(room);
            console.log(`User with ID: ${socket.id} left room: ${room}`);

            // Emit room member info after leaving
            socket.emit("leave_room_member_info", {
                user_id: socket.id,
                username: username,
                room: room,
                status: 'Disconnected'
            });
        });
    });
});

server.listen(3001, () => {
    console.log("SERVER RUNNING");
});