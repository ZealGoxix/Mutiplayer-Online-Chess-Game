#Logs

/// 1-22-25 ///
Dom

Overall Note:
The main goal was to get a working base going using JavaScript and following along with some of the listed tutorials. We can focus on refining the basic gameplay while adding in some of the more advanced features.

Resources Used:
(To be Added)

Added Features:
- UI/UX for chess board and chess pieces using svg files from online
- Basic movement restrictions for corresponding chess pieces
	Restrictions are:
	- Chess pieces can only move in with their respective direction with relativeness to the startId, 	targetID, and squares.
	- Chess pieces cannot move to a square if another chess piece obstructs that path.
- Click and drag functionality

Features to Focus on Next:
- 'checkForCheck' and 'checkForCheckmate' functions
- Allow for either white or black to move first with user interactable choice
- Clearer updates when a move is invalid.
- Adding in special chess conditions (i.e. castling, en passant, and pawn promotions with player choice)
- UI/UX cleanup
- Online multiplayer

Languages Used:
JavaScript
HTML
CSS

/// 1-29-25 ///
Paul
-Renamed the files' name to be lowercased.
-Renamed original app.js to moves.js since app.js name is what is often used for the node.js file.
-Added .gitignore to ignore the node_modules which contains the large sizes of the package/packages(Express). So, will people want to play it. They npm install it themselves by just 'npm install'.
-Instructions on how to run the project unclear. (I just used the Live Preview VS Extension on the html file). Will further add instructions via console in the another session.
-Wrapped the gameboard inside a container-div.
-Placed files inside a 'public' folder.
-Initalized an npm-project(Node.js).
-Installed(npm install) Express and Socket.io package/script.
-After a long journey to the wizard's tower, many errors and obstacles came into sight. I finally got the node.js server working... Now I take break :P

Save Point: https://socket.io/docs/v4/tutorial/step-1.
-This resource below served to be no bueno:
https://github.com/dwcares/RealTimeWeb-HOL/blob/master/2C%20-%20Handle%20moves%20from%20Server/public/lib/socket.io-1.2.0.js.

Dependencies:
1. Express package via npm install
2. Socket.io script via CDN script(no need for download)

Features to Focus on Next:
- 'checkForCheck' and 'checkForCheckmate' functions
- Allow for either white or black to move first with user interactable choice
- Clearer updates when a move is invalid.
- Adding in special chess conditions (i.e. castling, en passant, and pawn promotions with player choice)
- UI/UX cleanup
- Online multiplayer via socket.io and node.js

Note: I will save progress for now... (2 hours). I found documentation of the Socket.io website useful.