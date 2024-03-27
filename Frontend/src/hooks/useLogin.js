import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		setLoading(true);
		try {
			const response = await fetch("api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);

			toast.success("Login success!");
		} catch (error) {
			toast.error(error.message);
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, login };
};

export default useLogin;
