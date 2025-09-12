function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl text-center text-gray-700 font-semibold">Iniciar sesion</h1>
                <div className="flex flex-col gap-4 mt-6 w-full">
                    <label className="font-medium text-gray-600">Correo</label>
                    <input
                    type="email" 
                    className="border p-3 rounded-xl w-full"
                    placeholder="ejemplo@mail.com"
                    required />
                    <label className="font-medium text-gray-600">Contraseña</label>
                    <input
                    type="password"
                    className="border p-3 rounded-xl w-full"
                    placeholder="*******"
                    required />
                    <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 mt-4"> 
                        Iniciar sesion
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 mt-2">Olvide mi contraseña</button>
                </div>
            </div>
        </div>
    );
}

export default Login;