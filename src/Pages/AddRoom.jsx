import { useState } from "react";
import API from "../Services/api";

function AddRoom() {

  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "",
    price: ""
  });

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/rooms", room);

      alert("Room Added Successfully");

      setRoom({
        roomNumber: "",
        roomType: "",
        price: ""
      });

    } catch (error) {

      console.log(error);
      alert("Failed to Add Room");

    }
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Add Room</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            className="form-control mb-3"
            value={room.roomNumber}
            onChange={handleChange}
          />

          <input
            type="text"
            name="roomType"
            placeholder="Room Type"
            className="form-control mb-3"
            value={room.roomType}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="form-control mb-3"
            value={room.price}
            onChange={handleChange}
          />

          <button className="btn btn-primary">
            Save Room
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddRoom;