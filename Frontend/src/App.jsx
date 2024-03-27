import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();

	return (
		<div className="p-4 flex  items-center justify-center">
			
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={authUser ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/login"
						element={authUser ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/signup"
						element={authUser ? <Navigate to="/" /> : <SignUp />}
					/>
				</Routes>
			</BrowserRouter>
			<Toaster />
		</div>
	);
}

export default App;
