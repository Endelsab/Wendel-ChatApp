function formatCreatedAt(createdAt) {
	const options = {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "Asia/Manila",
	};
	const time = new Date(createdAt).toLocaleTimeString("en-PH", options);
	return time;
}
export default formatCreatedAt;
