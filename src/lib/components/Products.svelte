<script lang="ts">
	import { CoffeeStore } from '../../stores';
	import { fade, scale } from 'svelte/transition';
	import Card from '$lib/components/Card.svelte';
	export let active: string;

	$: availableProduct = $CoffeeStore.filter((product) => !product.soldOut);
</script>

<div class="flex items-center justify-center flex-wrap gap-x-8 mt-14 gap-y-10 text-grey-3">
	{#if active === 'all'}
		{#each $CoffeeStore as product (product.price)}
			<div in:scale out:fade>
				<Card {product} />
			</div>
		{/each}
	{:else}
		{#each availableProduct as product (product.price)}
			<div in:scale out:fade>
				<Card {product} />
			</div>
		{/each}
	{/if}
</div>
