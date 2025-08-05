import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit: "16kb"}))
app.use(cookieParser())
app.use(express.static("public"))

// route import 

import userRouter from "./routes/user.route.js";
import roomRouter from "./routes/room.route.js";
import fileRouter from "./routes/filesharing.route.js";
// route declaration

app.use("/api/v1/user",userRouter);
app.use("/api/v1/room",roomRouter);
app.use("/api/v1/file",fileRouter);
export { app }