import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Hotel Booking
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/rooms">Rooms</Link>
          <Link className="nav-link" to="/add-room">Add Room</Link>
          <Link className="nav-link" to="/book-room">Book Room</Link>
          <Link className="nav-link" to="/history">History</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;