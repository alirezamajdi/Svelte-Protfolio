<script lang="ts">
	let { value = $bindable(), ...props } = $props();
</script>

<input bind:value={value} {...props} placeholder="type here..." />

<style>
	input {
		font-family: 'Comic Sans MS';
		color: deeppink;
        border: 1px solid deeppink;
	}
</style>