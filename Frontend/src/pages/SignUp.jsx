import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300">
				<h1 className="text-3xl font-bold text-center mt-3 text-purple-900">
					Wendel's App
				</h1>
				<h3 className="text-2xl mt-5 font-semibold text-center text-gray-200">
					SignUp
				</h3>
				<form>
					<div className="flex flex-col items-center  justify-center">
						<input
							className="w-80 border h-10 bg-transparent hover:w-full ease-in-out transition-all  outline-none mt-10 rounded-md"
							type="email"
							placeholder="Enter your email"
						/>
						<input
							className="w-80 border h-10 bg-transparent outline-none mt-5  hover:w-full ease-in-out transition-all rounded-md"
							type="text"
							placeholder="Enter your username"
						/>
						<input
							className="w-80  hover:w-full ease-in-out transition-all border h-10 bg-transparent outline-none mt-5 rounded-md"
							type="password"
							placeholder="Enter your password"
						/>
						<GenderCheckBox />
						<span className="mt-3 hover:underline cursor-pointer">
							Already have an account ?
						</span>
						<button className="btn btn-primary my-5">SignUp</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
