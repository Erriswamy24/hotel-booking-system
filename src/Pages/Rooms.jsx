import { useEffect, useState } from "react";
import API from "../Services/api";
import RoomCard from "../Components/RoomCard";

function Rooms() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const response = await API.get("/rooms");
    setRooms(response.data);
  };

  return (
    <div className="container mt-4">

      <div className="row">

        {rooms.map((room) => (
          <div className="col-md-4 mb-4" key={room.id}>
            <RoomCard room={room} />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Rooms;