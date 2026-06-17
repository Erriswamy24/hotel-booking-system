import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AddRoom from "./Pages/AddRoom";
import BookRoom from "./Pages/BookRoom";
import BookingHistory from "./Pages/BookingHistory";

import "./Global/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/book-room" element={<BookRoom />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;