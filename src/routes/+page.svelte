<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import Spinner from '$lib/components/Spinner.svelte';

	export let data;
	export let form;

	let loading = false;

	const handle_enhance = ({}) => {
		console.log('Submitting...');
		loading = true;

		return async ({ result }) => {
			applyAction(result);
			loading = false;
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		};
	};
</script>

<div class="grid gap-4 w-full max-w-5xl m-4 p-4">
	<h1 class="text-2xl font-semibold">Create New Component</h1>
	<div class="grid gap-2 shadow-md p-4 m4 rounded-md bg-white">
		<h2 class="text-xl font-semibold">Prompt</h2>
		<form class="w-4/5" use:enhance={handle_enhance} method="POST">
			<input
				disabled={loading}
				name="chat"
				class="rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
			/>
			<button
				disabled={loading}
				class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
				type="submit"
			>
				Submit
			</button>
		</form>
	</div>

	{#if !loading && form}
		<h2 class="text-xl font-semibold">Response</h2>
		{#if form?.response}
			<div class="grid gap-2 p-4 shadow-md w-full bg-white">
				<h3 class="text-lg font-semibold">Preview</h3>
				{@html form.response.replace(/\\/g, '')}
			</div>
			<div class="grid gap-2 p-4 shadow-md w-full bg-white">
				<h3 class="text-lg font-semibold">Code</h3>
				<pre
					class="p-4 rounded-md bg-gray-800 text-gray-100 overflow-y-scroll min-h-[200px]">{form.response
						.replace(/\\/g, '')
						.trim()}</pre>
			</div>
		{/if}
	{:else if loading}
		<Spinner />
	{/if}
</div>

<style>
	* {
		min-width: 0;
	}
</style>
