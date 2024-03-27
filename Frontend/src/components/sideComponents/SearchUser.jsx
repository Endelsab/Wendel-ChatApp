import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../storeZustand/useConversation";

const SearchUser = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="flex items-center ">
			<input
				className="input input-bordered rounded-full w-[111px] mt-2 ml-1 md:w-[167px]"
				type="text"
				placeholder="Search..."
			/>
			<button className=" text-gray-500 hover:text-sky-500 ml-1 mt-2  ">
				<FaSearch size={"20px"} />
			</button>
		</form>
	);
};

export default SearchUser;
