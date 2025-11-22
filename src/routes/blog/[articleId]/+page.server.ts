export const load = async (event) => {
	const { articleId } = event.params;

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
	const resBody = await res.json();

	return { ...resBody };
};
