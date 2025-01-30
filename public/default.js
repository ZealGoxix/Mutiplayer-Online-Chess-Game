// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Ignore this file, it is a work in progress.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
const socket = io();

// Handle starting a game
document.getElementById("startGame").addEventListener("click", () => {
    socket.emit("startGame");
});

// Handle joining a game
document.getElementById("joinGame").addEventListener("click", () => {
    const roomID = document.getElementById("joinRoomID").value;
    socket.emit("joinGame", roomID);
});

// Listen for game events
socket.on("gameStarted", (roomID) => {
    alert(`Game started! Room ID: ${roomID}`);
});

socket.on("gameJoined", (roomID) => {
    alert(`Joined room: ${roomID}`);
});

socket.on("moveMade", (move) => {
    console.log("Move made:", move); // Here you would update the game state with the new move
});

socket.on("playerLeft", (playerID) => {
    alert(`Player ${playerID} left the game.`);
});

socket.on("error", (message) => {
    alert(message);
});
