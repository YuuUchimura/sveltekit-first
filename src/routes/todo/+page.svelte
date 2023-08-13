<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let name = '';

	// const handleSubmit = () => {
	// 	fetch('/api/todo', {
	// 		method: 'POST',
	// 		headers: { 'content-type': 'application-json' },
	// 		body: JSON.stringify({ name })
	// 	}).then(() => {
	// 		invalidateAll();
	// 	});
	// };
</script>

<h1>Todo</h1>

<form method="POST" action="?/create" use:enhance>
	<div>
		<label for="name">Name:</label>
		<input name="name" id="name" value={form?.name ?? ''} />
		{#if form?.errors?.name}
			<p class="error">{form?.errors?.name[0]}</p>
		{/if}
	</div>
	<button type="submit">Add</button>
</form>

<ul>
	{#each data.todos as todo}
		<li style="display:flex">
			<span>{todo.name}</span>
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={todo.id} />
				<button>X</button>
			</form>
		</li>
	{/each}
</ul>

<style>
	.error {
		padding: 0.5em;
		font-weight: 900;
		color: white;
		background-color: red;
	}
</style>
