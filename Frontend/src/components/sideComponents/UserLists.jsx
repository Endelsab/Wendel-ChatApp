import React from "react";
import useConversation from "../../storeZustand/useConversation";

const UserLists = ({ user }) => {
	
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === user._id;

	return (
		<div
			onClick={() => setSelectedConversation(user)}
			className={` flex mt-1 gap-1 items-center   hover:bg-sky-600 rounded p-2 cursor-pointer ${
				isSelected ? "bg-sky-500 " : " "
			}`}>
			<div className="avatar online">
				<div className="w-12 rounded-full">
					<img src={user.profilePic} alt="user Avatar" />
				</div>
			</div>
			<span
				className={`"text-sky-500 text-lg font-semibold ${
					isSelected ? "text-black" : ""
				}`}>
				{user.username}
			</span>
		</div>
	);
};

export default UserLists;
