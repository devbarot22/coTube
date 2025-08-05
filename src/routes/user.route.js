import { Router } from "express"; 
import { isAuthorized, loginUser, registerUser } from "../controllers/user.controller.js";
import { isYoutuber, verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/isAuthorized").get(verifyJWT,isYoutuber,isAuthorized)
router.get('/me', verifyJWT, (req, res) => {
  res.json({ user: req.user });
  console.log(req.user)
});

export default router