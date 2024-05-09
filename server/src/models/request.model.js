import mongoose, {Schema} from "mongoose";

const requestSchema = new Schema(
<<<<<<< HEAD:server/src/models/request.model.js
    {
        roomID: {
            type: mongoose.Types.ObjectId,
            ref: "Room",
            required: true
        },
=======
    {        
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/models/request.model.js
        senderID: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverID: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
<<<<<<< HEAD:server/src/models/request.model.js
=======
        roomToken: {
            type: String,
            required: true
        },
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/models/request.model.js
        pending: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

export const Request = mongoose.model("Request",requestSchema); 