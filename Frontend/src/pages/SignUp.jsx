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
		<div className="flex justify-center items-center h-screen">
			<div className="glowing_border  rounded-md">
				<h1 className="text-3xl font-bold text-center mt-4 text-sky-500">
					Wendel's App
				</h1>
				<h3 className="text-2xl  mt-5 font-semibold text-center text-gray-200">
					SignUp
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col items-center justify-center p-4">
						<input
							className=" glowing_border w-[270px]  p-2 h-10 bg-transparent outline-none mt-10 rounded-md"
							type="email"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
						/>
						<input
							className=" glowing_border w-[270px] p-2 h-10 bg-transparent outline-none mt-5 ease-in-out  rounded-md"
							type="text"
							placeholder="Enter your username"
							name="username"
							onChange={handleChange}
						/>
						<input
							className=" glowing_border w-[270px] p-2  h-10 bg-transparent outline-none mt-5 rounded-md"
							type="password"
							placeholder="Enter your password"
							name="password"
							onChange={handleChange}
						/>
						<input
							className=" glowing_border w-[270px]  p-2 h-10 bg-transparent outline-none mt-5 rounded-md"
							type="text"
							placeholder="Enter your gender"
							name="gender"
							onChange={handleChange}
						/>

						<Link
							to={"/login"}
							className="mt-3 text-sky-500 hover:underline cursor-pointer">
							Already have an account ?
						</Link>
						<button
							type="submit"
							className="btn glowing_border bg-sky-500 my-5 text-black hover:bg-gray-500"
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
