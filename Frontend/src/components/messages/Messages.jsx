import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessagesSkeleton from "../../skeleton/MessagesSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessage = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto">
			{loading && <MessagesSkeleton />}
			{messages.length ? (
				messages.map((message) => {
					return (
						<div key={message._id} ref={lastMessage}>
							<Message message={message} />
						</div>
					);
				})
			) : (
				<p className="text-center mt-28">
					Send a message to start the pagmamahalan !
				</p>
			)}
		</div>
	);
};

export default Messages;
