import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./AccordionCompo";
import { FiX } from "react-icons/fi";


const YoutuberRoomCreation = () => {
  const [rooms, setRooms] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [time, setTime] = useState(20);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/room/create-room", {
        withCredentials: true,
      }) // replace with your API endpoint
      .then((response) => setRooms(response.data.rooms));
  }, []);

  const createRoom = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/room/create-room",
        {
          roomname: roomName,
          time: time,
        },
        {
          withCredentials: true,
        }
      );
      
      const data = response.data;
      console.log(response.data)

      // Update the rooms state with the new room
      setRooms((prevRooms: string[]) => [...prevRooms, roomName]);
      setShowModal(false);
      setRoomName("");
    } catch (error: any) {
      console.error("Room creation failed", error.message);
    }
  };

  return (
    <div className="flex relative w-5/6 h-[80vh] flex-col bg-transparent items-center">
      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent bg-opacity-50 z-50">
          <div className="bg-white relative p-10 rounded-lg shadow-md">
            <FiX
              className="absolute top-2 right-2 cursor-pointer"
              size={24}
              onClick={() => setShowModal(false)}
            />
            <input
              type="text"
              placeholder="Room name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg mb-5 w-full"
            />
            <label htmlFor="time">Time</label>
            <div className="flex justify-around">
              {[5, 10, 20, 40].map((t) => (
                <div
                  key={t}
                  className={`w-14 h-14 rounded-full border-2 ${
                    time === t ? "border-blue-500" : "border-gray-300"
                  } flex items-center justify-center cursor-pointer`}
                  onClick={() => setTime(t)}>
                  {t}
                </div>
              ))}
            </div>
            <button
              className="text-white bg-blue-500 mt-5 p-2 rounded-lg w-full"
              onClick={createRoom}>
              Create Room
            </button>
          </div>
        </div>
      )}
      {rooms.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-2xl">
            Connect and share! Create a room to chat, collaborate, or have fun.
          </h1>
          <button
            className="text-white border border-white py-2 px-2 w-32 mt-5 outline-none"
            onClick={() => setShowModal(true)}>
            Create Room
          </button>
        </div>
      ) : (
        <div className="relative h-[90vh] w-full">
          <button
            className="text-white border border-white py-2 px-2 w-32 mb-10 absolute top-0 right-0 rounded-sm hover:rounded-lg transition-all ease-in-out duration-500 outline-none"
            onClick={() => setShowModal(true)}>
            Create Room
          </button>
          <Accordion rooms={rooms} />
        </div>
      )}
    </div>
  );
};

export default YoutuberRoomCreation;
