import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="bg-gray-600 text-white px-6 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-semibold text-xl">Bienvendios! Vecinos de Las Piedras 297</h1>

                {/* Links */}
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-green-400 transition font-semibold">Home</Link>
                    <Link to="/Turnos" className="hover:text-green-400 transition font-semibold">Turnos</Link>
                    <Link to="/Admin" className="hover:text-green-400 transition font-semibold">Admin</Link>
                    <Link to="/Login" className="hover:text-green-400 transition font-semibold">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;