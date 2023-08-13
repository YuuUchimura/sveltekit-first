<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>ユーザ詳細画面</title>
</svelte:head>

<h1>ユーザ一覧</h1>
<ul>
	{#each data.users as user}
		<li><a href={`/user/${user.id}`}>{user.name}</a></li>
	{/each}
</ul>
