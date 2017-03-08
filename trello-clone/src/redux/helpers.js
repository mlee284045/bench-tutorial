export default function generateId(type) {
	const currentTime = Date.now();
	const preTimeHash = parseInt(currentTime/1000000, 10);
	const postTimeHash = currentTime%1000000
	return `${preTimeHash}-${type}-${postTimeHash}`
}