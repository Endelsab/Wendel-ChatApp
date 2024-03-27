import React from "react";

import Userlist from "../sideComponents/Userlist";
import Logout from "../sideComponents/Logout";
import useGetUsers from "../../hooks/useGetUsers";


const SiderBar = () => {
	const { loading } = useGetUsers();
	return (
		<div className=" w-[152px] md:w-[250px] border-slate-500  flex overflow-hidden flex-col ">
	
			<div className="divider divider-info mt-10 ">User lists</div>

			<div className="overflow-auto text-wrap h-[400px]">
				{loading ? (
					<span className="loading loading-spinner "></span>
				) : (
					<Userlist />
				)}
			</div>

			<Logout />
		</div>
	);
};

export default SiderBar;
