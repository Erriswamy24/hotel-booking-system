function RoomCard({ room }) {
  return (
    <div className="card shadow">

      <div className="card-body">

        <h4>{room.roomNumber}</h4>

        <p>{room.roomType}</p>

        <h5>₹ {room.price}</h5>

      </div>

    </div>
  );
}

export default RoomCard;