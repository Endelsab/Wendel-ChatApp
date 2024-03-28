import React from "react";
import useConversation from "../../storeZustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import formatCreatedAt from "../../utils/extractTime.js";

const Message = ({ message }) => {
	const { selectedConversation } = useConversation();
	const { authUser } = useAuthContext();
	const formattedDate = formatCreatedAt(message.createdAt);

	const fromMe = message.senderId === authUser._id;
	const chatClassname = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;

	const bgColor = fromMe ? "bg-sky-500" : "bg-gray-500 ";

	const shakeNewMessage = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassname}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="user Avatar" src={profilePic} />
				</div>
			</div>

			<div className={`chat-bubble text-white ${bgColor} ${shakeNewMessage}`}>
				{message.message}
			</div>
			<div className="chat-footer opacity-30 text-xs flex gap-1 items-center">
				{formattedDate}
			</div>
		</div>
	);
};

export default Message;
