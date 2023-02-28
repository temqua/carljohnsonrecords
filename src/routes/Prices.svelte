<script>
	export let pricesHeader = 'Услуги и цены';
	export let prices = [
		{
			price: 350,
			title: 'Репетиция группы',
			src: 'rehearsal.png',
			alt: 'Band rehearsal'
		},
		{
			price: 500,
			title: 'Запись вокала/инструмента',
			src: 'instrumentrec.png',
			alt: 'Instrument or vocals recording services'
		},
		{
			price: 750,
			title: 'Запись группы лайвсетом',
			src: 'livesetrec.png',
			alt: 'Live set recording services'
		},
		{
			price: 2000,
			title: 'Сведение/мастеринг',
			src: 'mixing.png',
			alt: 'Mixing services'
		}
	];
</script>

<section id="pricelist">
	<h1>{pricesHeader}</h1>
	<div id="prices">
		{#each prices as price}
			<div class="price">
				<img src={price.src} alt={price.alt} />
				<h2>{price.title}</h2>
				<h1>{price.price} ₽/ЧАС</h1>
			</div>
		{/each}
	</div>
</section>

<style>
	#prices {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 1em;
		text-transform: uppercase;
		min-height: 550px;
		text-align: center;
	}

	.price {
		padding: 1.2em 1em;
		justify-items: center;
		border-radius: 0.5em;
		background-color: #1a1a1a;
	}

	.price img {
		border-radius: 0.4em;
	}

	.price > h2 {
		font-size: 0.6em;
	}

	@media all and (max-width: 1024px) {
		#prices {
			grid-template-columns: 1fr;
		}

		.price {
			padding: 0;
		}

		.price img {
			border-radius: 0;
			width: 100%;
		}
	}
</style>
