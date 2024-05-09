import { Router } from "express"; 
import { isAuthorizedForRoom, isRoomActive, isYoutuber, verifyJWT } from "../middlewares/auth.middleware.js";
<<<<<<< HEAD:server/src/routes/room.route.js
import { createRoom, furtherAction, inviteToRoom, joinRoom } from "../controllers/room.controller.js";
=======
import { closeRoom, countRoomParticipants, createRoom, furtherAction, inviteToRoom, joinRoom } from "../controllers/room.controller.js";
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/routes/room.route.js

const router = Router();

router.route("/create-room").post(verifyJWT,isYoutuber,createRoom);

router.route("/invite-to-room/:receiverID").post(verifyJWT,isYoutuber,isRoomActive,inviteToRoom);

<<<<<<< HEAD:server/src/routes/room.route.js
=======
router.route("/close-room").get(verifyJWT,isYoutuber,isRoomActive,closeRoom)
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/routes/room.route.js

//editors routes
router.route("/join-to-room").post(verifyJWT,isRoomActive,joinRoom);

router.route("/joined").get(verifyJWT,isRoomActive,isAuthorizedForRoom,furtherAction)

<<<<<<< HEAD:server/src/routes/room.route.js
=======
// both routes

router.route("/participant-count").get(verifyJWT,isRoomActive,countRoomParticipants)

>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/routes/room.route.js
export default router