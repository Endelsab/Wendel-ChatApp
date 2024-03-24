import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchUser = () => {
	return (
		<form className="flex items-center gap-2 mt-5">
			<input
				className="input input-bordered rounded-full"
				type="text"
				placeholder="Search..."
			/>
			<button className="btn btn-circle bg-black-500 text-sky-500 hover:text-black hover:bg-sky-500">
				<FaSearch />
			</button>
		</form>
	);
};

export default SearchUser;
