<script>

	import { onMount } from 'svelte';
    onMount(async () => {
        await import('@plusui/core');
        await import('@plusui/core/style.css'); 
    });

	import Header from './Header.svelte';
	import Aside from './Aside.svelte';
	import Footer from './Footer.svelte';
	import { page } from '$app/state';

	import '../app.css';
	let isAuthRoute = page.url.pathname.includes("/auth");
	
	let { children } = $props();
</script>

<div class="app">
	{#if isAuthRoute}
		{@render children()}
	{:else}
	
		<main class="flex mainContainer">
			<!-- <Aside cStyle="width: 15rem; resize: horizontal"/> -->
	
			<div class="flex flex-col w-full justify-between mainFlow">
				{@render children()}
				<!-- <Footer /> -->
			</div>
		</main>
	{/if}
</div>

<style>
	.mainContainer {
		width: 100%;
		height: calc(100vh - 4.75rem);
	}
</style>
