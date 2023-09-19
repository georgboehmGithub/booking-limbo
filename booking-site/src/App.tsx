import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from './pages/BookingPage';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root')!);

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/booking' element={<BookingPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
