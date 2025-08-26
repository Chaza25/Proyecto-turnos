import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Turnos from "./pages/Turnos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Reservas from "./pages/Reservas";
import Error from "./pages/Error";
import MisReservas from "./pages/MisReservas";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-clip">
      {/* NavBar */}
      <NavBar />
      {/* Main Contenido */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reserva" element={<Reservas />} />
          <Route path="/mis-reservas" element={<MisReservas />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;