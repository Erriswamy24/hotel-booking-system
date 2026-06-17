import { useEffect, useState } from "react";
import API from "../Services/api";

function BookingForm() {

  const [rooms, setRooms] = useState([]);

  const [booking, setBooking] = useState({
    customerName: "",
    checkIn: "",
    checkOut: "",
    roomId: ""
  });

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const response = await API.get("/rooms");
    setRooms(response.data);
  };

  const handleChange = (e) => {

    setBooking({
      ...booking,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const bookingData = {
      customerName: booking.customerName,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      room: {
        id: booking.roomId
      }
    };

    try {

      await API.post("/bookings", bookingData);

      alert("Room Booked Successfully");

    } catch (error) {

      alert("Room Already Booked");

    }
  };

  return (

    <div className="card shadow p-4">

      <h2>Book Room</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="date"
          name="checkIn"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="date"
          name="checkOut"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <select
          name="roomId"
          className="form-control mb-3"
          onChange={handleChange}
        >

          <option>Select Room</option>

          {
            rooms.map(room => (
              <option
                key={room.id}
                value={room.id}
              >
                {room.roomNumber}
              </option>
            ))
          }

        </select>

        <button className="btn btn-success">
          Book Now
        </button>

      </form>

    </div>
  );
}

export default BookingForm;