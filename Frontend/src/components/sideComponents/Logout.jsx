import React from "react";
import { CgLogOut } from "react-icons/cg";
import useLogOut from "../../hooks/useLogOut";

const Logout = () => {
	const { logout } = useLogOut();
	return (
		<div className=" absolute flex  bottom-0 mb-1  ">
			<CgLogOut size={"30px"}
				onClick={logout}
				className="w-6 h-6 text-white cursor-pointer hover:text-sky-500 hover:scale-125"
			/><p className="text-xs mt-1 ml-1">Logout</p>
		</div>
	);
};

export default Logout;
