import React from "react";
import useGetUsers from "../../hooks/useGetUsers";
import UserLists from "./UserLists";

const Userlist = () => {
	const { users } = useGetUsers();

	return (
		<div >
			{users.map((user) => (
				<UserLists key={user._id} user={user} />
			))}
		</div>
	);
};

export default Userlist;
