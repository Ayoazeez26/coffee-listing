import { writable } from 'svelte/store';
import blackCoffee from '$lib/assets/black.jpg';
import cappuccino from '$lib/assets/cappuccino.jpg';
import cookie from '$lib/assets/cookie.png';
import heart from '$lib/assets/heart.png';
import mug from '$lib/assets/mug.png';
import plain from '$lib/assets/plain.png';

export const CoffeeStore = writable([
	{
		name: 'Cappuccino',
		price: '5.20',
		rating: '4.7',
		votes: 23,
		popular: true,
		soldOut: false,
		image: cappuccino
	},
	{
		name: 'House Coffee',
		price: '3.50',
		rating: '4.85',
		votes: 14,
		popular: true,
		soldOut: false,
		image: blackCoffee
	},
	{
		name: 'Espresso',
		price: '2.50',
		rating: '4.9',
		votes: 55,
		popular: false,
		soldOut: false,
		image: cookie
	},
	{
		name: 'Coffee Latte',
		price: '4.50',
		rating: '5.0',
		votes: 23,
		popular: false,
		soldOut: false,
		image: heart
	},
	{
		name: 'Chocolate Coffee',
		price: '4.00',
		rating: '4.65',
		votes: 122,
		popular: false,
		soldOut: true,
		image: mug
	},
	{
		name: 'Valentine Special',
		price: '5.50',
		rating: '',
		votes: 0,
		popular: false,
		soldOut: false,
		image: plain
	}
]);
