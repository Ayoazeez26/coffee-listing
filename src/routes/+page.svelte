<script>
	import bgCafe from '$lib/assets/bg-cafe.jpg';
	import Header from '$lib/components/Header.svelte';
  import Products from '$lib/components/Products.svelte';

	let active = 'available';
</script>

<div class="bg-black min-h-screen w-full pt-16 mx-auto">
	<img class="absolute top-0 left-0 right-0 z-0" src={bgCafe} alt="" />
	<div
		class="bg-grey flex flex-col items-center justify-center px-14 mt-40 py-24 relative z-[1] rounded-lg w-4/5 max-w-7xl mx-auto"
	>
		<Header />
		<div class="flex gap-5 mt-5 items-center">
			<button
				on:click={() => (active = 'all')}
				class={active === 'all'
					? 'bg-grey-2 rounded-md text-grey-3 py-2 px-3'
					: 'text-grey-3 py-2 px-3'}>All Products</button
			>
			<button
				on:click={() => (active = 'available')}
				class={active === 'available'
					? 'bg-grey-2 rounded-md py-2 px-3 text-grey-3'
					: 'text-grey-3 py-2 px-3'}>Available Now</button
			>
		</div>
		<Products {active} />
	</div>
</div>
