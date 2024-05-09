import jwt from "jsonwebtoken";
import mongoose, {Schema} from "mongoose";
<<<<<<< HEAD:server/src/models/roomParticipant.model.js
=======
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/models/roomParticipant.model.js

const roomParticipantSchema = new Schema(
    {
        roomID: {
            type: mongoose.Types.ObjectId,
            ref: "Room",
            required: true
        },
        roomOwnerID: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true 
        },
        participantID: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
<<<<<<< HEAD:server/src/models/roomParticipant.model.js
        } 
=======
        },
        token: {
            type: String
        }  
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/models/roomParticipant.model.js
    },
    {
        timestamps: true
    }
);

roomParticipantSchema.methods.generateToken = function(time){
    return jwt.sign(
        {
            _id: this._id,
            roomID: this.roomID,
            roomOwnerID: this.roomOwnerID,
            participantID: this.participantID
        },
        process.env.ROOM_PARTICIPANT_TOKEN_SECRET,
        {
            expiresIn: (time * 60)            
        }
    ) 
} 

<<<<<<< HEAD:server/src/models/roomParticipant.model.js
=======
roomParticipantSchema.plugin(mongooseAggregatePaginate);
>>>>>>> c5729ed2435870a4897bfb7bcc2737db5d7cbf71:src/models/roomParticipant.model.js
export const RoomParticipant = mongoose.model("RoomParticipant",roomParticipantSchema);