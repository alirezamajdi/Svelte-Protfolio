<!-- <script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()} -->

<script>
	import './layout.css';
	import Header from '../components/Header.svelte';
	
	let y;
	let innerWidth = 0;
	let innerHeight = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class="relative container mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"
>
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200 ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<button
			on:click={goTop}
			class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-violet-400 hover:bg-slate-800 sm:px-4"
		>
			<i class="fa-solid fa-arrow-up" />
		</button>
	</div>
	<Header {y} {innerHeight} />
	<slot />
	
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
