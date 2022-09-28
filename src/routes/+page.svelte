<script>
	import { browser } from '$app/environment';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	const invalidateCacheAndThenNavigate = async () => {
		await invalidateAll();
		await goto('/', {})
	}
	
</script>

<h1>Explanation</h1>

<p>Deleting the cookies and refreshing the page does not set new cookies.</p>
<p>This is despite the handle and load functions setting new cookies on every page request.</p>

<a
	on:click={() => {
		document.cookie = 'handle=; Path=/; SameSite=Lax; maxAge:0';
		document.cookie = 'load=; Path=/; SameSite=Lax; maxAge:0';
	}}
	data-sveltekit-reload
	href="/">Delete cookies and reload the page</a
>
<button on:click={invalidateCacheAndThenNavigate}>Invalidate cache, then navigate</button>

<h2>document.cookie:</h2>
{#if browser}
<p>{document.cookie ? document.cookie : 'No cookies were set. This is a bug.'}</p>
{/if}


<h2>However...</h2>
<h3>Invalidation</h3>
<p>The cookies are successfully set after the page is invalidated.</p>
<a on:click={() => invalidate($page.url.href)} data-sveltekit-reload href="/"
	>Invalidate and reload the page</a
>

<h3>Empty cache</h3>
<p>The cookies are also set if the browser cache is emptied and the page is reloaded.</p>

<h2>Additionally...</h2>
<p>Building the app and running it with `npm run preview` has different bugs.</p>
<p>The `load` cookie does not get set after invalidating.</p>
<p>
	The `handle` cookie is inconsistently set after a random number of reloads. However, it still gets
	set after invalidation.
</p>
<p>The preview server is also outputting the error `Error: Not found: /service-worker.js`</p>