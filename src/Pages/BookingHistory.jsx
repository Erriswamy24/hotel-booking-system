import { useEffect, useState } from "react";
import API from "../Services/api";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {

    const response =
      await API.get("/bookings");

    setBookings(response.data);

  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Booking History
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>Name</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Check Out</th>
          </tr>

        </thead>

        <tbody>

          {
            bookings.map(booking => (

              <tr key={booking.id}>

                <td>
                  {booking.customerName}
                </td>

                <td>
                  {booking.room?.roomNumber}
                </td>

                <td>
                  {booking.checkIn}
                </td>

                <td>
                  {booking.checkOut}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default BookingHistory;