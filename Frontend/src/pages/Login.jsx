import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="  flex justify-center items-center h-screen">
			<div className=" glowing_border  rounded-md ">
				<h1 className="text-3xl text-sky-500 font-bold text-center mt-5 ">
					Wendel's App
				</h1>
				<h3 className="text-2xl mt-5 font-semibold text-center text-gray-200">
					Login
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col items-center justify-center p-4">
						<input
							className="glowing_border p-2  w-[270px]  h-10 bg-transparent outline-none  mt-10 rounded-md "
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className=" glowing_border p-2 w-[270px]  h-10 bg-transparent outline-none mt-5 rounded-md"
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Link
							to={"/signup"}
							className="mt-3 hover:underline text-sky-500 cursor-pointer">
							Don't have an account ?
						</Link>
						<button
							disabled={loading}
							className="btn glowing_border bg-sky-500 my-5 text-black hover:bg-gray-500">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
