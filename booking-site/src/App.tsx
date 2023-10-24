import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import Modal from "react-modal";
import HomePage from "./pages/HomePage";

Modal.setAppElement(document.getElementById("root")!);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
