import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin()
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300">
				<h1 className="text-3xl font-bold text-center mt-3 text-purple-900">
					Wendel's App
				</h1>
				<h3 className="text-2xl mt-5 font-semibold text-center text-gray-200">
					Login
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col items-center justify-center">
						<input
							className="w-80 border h-10 bg-transparent outline-none ease-in-out transition-all mt-10 rounded-md hover:w-full"
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className="w-80 border h-10 bg-transparent ease-in-out hover:w-full transition-all outline-none mt-5 rounded-md"
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Link
							to={"/signup"}
							className="mt-3 hover:underline cursor-pointer">
							Don't have an account ?
						</Link>
						<button disabled={loading} className="btn btn-primary my-5">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
