<script lang="ts">
	import type { Service } from '$lib/models/service';
	export let header = 'Услуги и цены';
	const defaultServices: Service[] = [
		{
			title: 'Репетиция группы',
			src: 'rehearsal.png',
			alt: 'Band rehearsal'
		},
		{
			title: 'Запись вокала/инструмента',
			src: 'instrumentrec.png',
			alt: 'Instrument or vocals recording services'
		},
		{
			title: 'Запись группы лайвсетом',
			src: 'livesetrec.png',
			alt: 'Live set recording services'
		},
		{
			title: 'Сведение/мастеринг',
			src: 'mixing.png',
			alt: 'Mixing services'
		}
	];
</script>

<section id="servicelist">
	<h1>Услуги</h1>
	<div id="services">
		{#each defaultServices as service}
			<div class="service">
				<img src={service.src} alt={service.alt} />
				<h2>{service.title}</h2>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	#services {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 1em;
		text-transform: uppercase;
		min-height: 550px;
		text-align: center;

		@media all and (max-width: 1024px) {
			grid-template-columns: 1fr;
		}
	}

	.service {
		padding: 1.2em 1em;
		justify-items: center;
		border-radius: 0.5em;
		background-color: #1a1a1a;

		img {
			border-radius: 0.4em;

			@media all and (max-width: 1024px) {
				border-radius: 0;
				width: 100%;
			}
		}

		> h2 {
			font-size: 0.6em;
		}

		@media all and (max-width: 1024px) {
			padding: 0;
		}
	}
</style>
