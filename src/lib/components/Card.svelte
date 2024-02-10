<script lang="ts">
	import type { ProductObj } from '$lib/utils/types';
	import star from '$lib/assets/star.svg';
	import starFill from '$lib/assets/star_fill.svg';

	export let product: ProductObj;
</script>

<div class="flex flex-col relative">
	{#if product.popular}
		<div class="absolute bg-yellow px-4 text-xs py-1 top-2 left-2 rounded-3xl text-black">
			Popular
		</div>
	{/if}
	<img class="rounded-xl w-[300px]" src={product.image} alt="a cappuccino coffee" />
	<div class="flex mt-3 items-start justify-between">
		<div class="flex flex-col gap-3">
			<p class="text-lg">{product.name}</p>
			<div class="flex items-center">
				{#if product.rating}
					<img src={starFill} alt="" />
				{:else}
					<img src={star} alt="" />
				{/if}
				{#if product.votes}
					<p class="ml-1">{product.rating}</p>
					<p class="text-sm ml-1 text-grey-2">({product.votes} votes)</p>
				{:else}
					<p class="text-sm ml-1 text-grey-2">No ratings</p>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<div
				class="bg-lime rounded text-black px-3 py-1.5 font-medium flex items-center justify-center text-sm"
			>
				${product.price}
			</div>
      {#if product.soldOut}
      <p class="text-orange">Sold out</p>
      {/if}
		</div>
	</div>
</div>
