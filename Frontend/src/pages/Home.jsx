import React from "react";
import SiderBar from "../components/sidebar/SiderBar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
	return (
		
			
			<div className=" w-96 md:w-[550px] h-[500px] mt-[50px] md:mt-[50px]  flex border rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<SiderBar />
				<MessageContainer />
			</div>
	
	);
};

export default Home;
