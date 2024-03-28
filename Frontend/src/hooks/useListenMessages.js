import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../storeZustand/useConversation";

import notifySound from "../assets/sounds/frontend_src_assets_sounds_notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();

	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notifySound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};

export default useListenMessages;
