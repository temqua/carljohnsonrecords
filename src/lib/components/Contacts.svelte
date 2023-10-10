<script>
	import Links from './Links.svelte';
</script>

<section id="contacts">
	<h1>Контакты</h1>
	<div id="contacts-container">
		<div class="map">
			<iframe
				id="map"
				src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=226912412712"
				frameborder="0"
				title="map"
			/>
		</div>
		<div id="contacts-links">
			<h1 id="address" class="contact uppercase text-center">г. Рязань, ул. Полевая, д.58</h1>
			<Links />
			<div class="contact">
				<a href="tel:+79155938587" class="uppercase text-cetner">+7 915 593 85 87</a>
			</div>
			<div class="contact">
				<a href="tel:+79537372555" class="uppercase text-cetner">+7 953 737 25 55</a>
			</div>
			<div class="contact">
				<a href="mailto:cj.rec@ya.ru" class="uppercase text-cetner">cj.rec@ya.ru</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding: 1em;
	}
	#address {
		margin: 0;
		font-size: 0.7em;
	}

	#map {
		width: 700px;
		height: 400px;
		padding: 0;
		margin: 0;

		@media all and (max-width: 1024px) {
			width: 85vw;
		}
	}

	#contacts-container {
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr;
		row-gap: 1em;

		@media all and (max-width: 1024px) {
			display: grid;
			grid-template-columns: 1fr;
		}

		:global(.links a) {
			min-width: 2em;
			min-height: 80px;
		}
	}

	.contact {
		padding: 0.7rem;
		font-size: 0.9em;
	}

	.contact a {
		color: white;

		&:hover {
			color: #990e0e;
		}
	}

	#contacts-links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
