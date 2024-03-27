import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");

	const { sendmessage, loading } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendmessage(message);
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit} className="px-4 my-3">
			<div className="w-full relative overflow-hidden">
				<input
					className="p-2 rounded-lg w-full outline-none"
					type="text"
					value={message}
					placeholder="Send a message..."
					onChange={(e) => setMessage(e.target.value)}
				/>

				<button
					type="submit"
					className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-sky-500 hover:scale-125">
					{loading ? (
						<span className="loading loading-spinner"></span>
					) : (
						<BsSend />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
