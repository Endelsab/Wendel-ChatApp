import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
	const [loading, setLoading] = useState(false);
	const { authUser, setAuthUser } = useAuthContext();

	const signup = async ({ email, username, password, gender }) => {
		const success = handleInputError({ email, username, password, gender });

		if (!success) return;

		setLoading(true);
		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, username, password, gender }),
			});

			const data = await response.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			toast.success("SignUp success!");
			console.log(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signup };
};

export default useSignUp;

function handleInputError({ email, username, password, gender }) {
	if (!email || !username || !password || !gender) {
		toast.error("Please fill in all fields !");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
