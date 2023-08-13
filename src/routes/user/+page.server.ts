import type { PageServerLoad } from './$types';
type User = {
	id: number;
	name: string;
};

// export const ssr = true;

// export const csr = false;

export const load = (async ({ fetch }) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: User[] = await response.json();
	return {
		users
	};
}) satisfies PageServerLoad;
