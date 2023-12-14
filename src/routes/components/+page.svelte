<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import Person from '$lib/components/Person.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Login from '$lib/components/Login.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Form from '$lib/components/Form.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import BarChart from '$lib/components/BarChart.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Badge from '$lib/components/Badge.svelte';
</script>

<Header />
<div class="grid grid-cols-[200px_1fr]">
	<div>
		<Sidebar />
	</div>

	<div class="mx-auto w-full max-w-5xl p-8">
		<div><slot /></div>

		<div class="p-4 grid gap-4 grid-cols-2">
			<Avatar />
			<Person />
			<ProductCard />
			<Login />
			<Form />
			<Accordion />
			<BarChart />
			<ProgressBar />
			<div class="flex flex-row gap-2">
				<Badge />
				<Badge />
				<Badge />
				<Badge />
				<Badge />
			</div>
		</div>
	</div>
	<div class="col-span-full">
		<Footer />
	</div>
</div>
