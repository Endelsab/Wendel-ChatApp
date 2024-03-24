import React from "react";

const Userlist = () => {
	return (
		<>
			<div className="flex mt-1 gap-2 items-center hover:bg-sky-600 rounded p-2 cursor-pointer">
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img
							src="https://wallpapercave.com/wp/wp2198462.png"
							alt="user Avatar"
						/>
					</div>
				</div>
				<span className="text-black font-bold ">John Doe</span>
			</div>
			<div></div>
		</>
	);
};

export default Userlist;
