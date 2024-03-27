import React, { useState } from "react";

import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
		gender: "",
	});

	const { loading, signup } = useSignUp();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(user);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300">
				<h1 className="text-3xl font-bold text-center mt-3 text-purple-900">
					Wendel's App
				</h1>
				<h3 className="text-2xl mt-5 font-semibold text-center text-gray-200">
					SignUp
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col items-center  justify-center">
						<input
							className="w-80 border h-10 bg-transparent hover:w-full ease-in-out transition-all  outline-none mt-10 rounded-md"
							type="email"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
						/>
						<input
							className="w-80 border h-10 bg-transparent outline-none mt-5  hover:w-full ease-in-out transition-all rounded-md"
							type="text"
							placeholder="Enter your username"
							name="username"
							onChange={handleChange}
						/>
						<input
							className="w-80  hover:w-full ease-in-out transition-all border h-10 bg-transparent outline-none mt-5 rounded-md"
							type="password"
							placeholder="Enter your password"
							name="password"
							onChange={handleChange}
						/>
						<input
							className="w-80  hover:w-full ease-in-out transition-all border h-10 bg-transparent outline-none mt-5 rounded-md"
							type="text"
							placeholder="Enter your gender"
							name="gender"
							onChange={handleChange}
						/>

						<Link to={"/login"} className="mt-3 hover:underline cursor-pointer">
							Already have an account ?
						</Link>
						<button
							type="submit"
							className="btn btn-primary my-5"
							disabled={loading}>
							SignUp
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
