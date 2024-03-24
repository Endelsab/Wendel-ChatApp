import React from "react";
import { CgLogOut } from "react-icons/cg";

const Logout = () => {
	return (
		<div className="mt-auto">
			<CgLogOut className="w-6 h-6 text-white cursor-pointer hover:text-sky-500 hover:scale-125" />
		</div>
	);
};

export default Logout;
