<script>
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	
	/** @type {Array<{key: string; value: string}>} */
	let currentDocumentCookies = [];
	let documetCookieRaw = '';
	const updateCurrentDocumentCookies = () => {
		documetCookieRaw = document.cookie;
		currentDocumentCookies = document.cookie
			.split(';')
			.map((s) => s.trim())
			.filter((s) => s.length > 0)
			.map((s) => {
				const kv = s.split('=');
				return {
					key: kv[0].trim(),
					value: decodeURIComponent(kv[1] || '')
				};
			});
	};
	onMount(() => {
		updateCurrentDocumentCookies();
	});

	
</script>

<div style="display: flex;justify-content: space-around;">
	<div style="width: 45%;">
		<h4>Server</h4>
		<pre>{JSON.stringify(data, null, 1)}</pre>
	</div>
	<div style="width: 45%;">
		<h4>Client (not reactive -- click "Update")</h4>
		<p>
			<button on:click={updateCurrentDocumentCookies}>Update</button>
		</p>
		<pre>{JSON.stringify(currentDocumentCookies, null, 1)}</pre>
		<h6>Raw document.cookie</h6>
		<p>
			{documetCookieRaw}
		</p>
		
	</div>
</div>
<hr />
<div style="display:flex; justify-content: space-between;">
	<a href="/set">Set Endpoint Cookie</a>

	<a href="/delete">Delete Endpoint Cookie</a>

	<form action="?/deleteHandleCookie" method="post" use:enhance>
		<button type="submit">Delete Handle Cookie</button>
	</form>

	<form action="?/deleteLoadCookie" method="post" use:enhance>
		<button type="submit">Delete Load Cookie</button>
	</form>

	<form action="?/setActionCookie" method="post" use:enhance>
		<button type="submit">Set Action Cookie</button>
	</form>

	<form action="?/deleteActionCookie" method="post" use:enhance>
		<button type="submit">Delete Action Cookie</button>
	</form>
</div>



