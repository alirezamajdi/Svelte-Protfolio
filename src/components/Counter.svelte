<script>
	import Input from './Input.svelte';
	let { props } = $props();

	let count = $state(0);
	let name = $state(0);
	let inputValue = $state('');

	let tt = $derived(name);

	$effect(() => {
		console.log('name', name);
		console.log('ccc', props);
	});


</script>

<main>
	<p>{count}</p>
	<h2>tt {tt}</h2>
	<button
		on:click={() => {
			count += 1;
		}}>change count</button
	>
	<button
		on:click={() => {
			name = count;
		}}>change name</button
	>
	<Input bind:value={inputValue} />
	{inputValue}
</main>
