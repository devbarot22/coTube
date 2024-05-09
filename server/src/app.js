import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({
<<<<<<< HEAD:server/src/app.js
  origin: 'http://localhost:5173',
  credentials: true
}))
=======
    origin: process.env.CROSS_ORIGIN,
    credentials: true
}))

>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/app.js
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit: "16kb"}))
app.use(cookieParser())
app.use(express.static("public"))

// route import 

import userRouter from "./routes/user.route.js";
import roomRouter from "./routes/room.route.js";
<<<<<<< HEAD:server/src/app.js
=======
import fileRouter from "./routes/filesharing.route.js";
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/app.js
// route declaration

app.use("/api/v1/user",userRouter);
app.use("/api/v1/room",roomRouter);
<<<<<<< HEAD:server/src/app.js

=======
app.use("/api/v1/file",fileRouter);
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/app.js
export { app }