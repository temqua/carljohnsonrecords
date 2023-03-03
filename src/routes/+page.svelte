<script lang="ts">
	import type { Price } from "../models/price"
	import Links from './Links.svelte';
	import Prices from './Prices.svelte';
	export let data;
	let prices: Price[] = data.prices;
	let general = data.general;
</script>

<section id="main">
	<div id="main-logo" />
	<a class="text-center" href="#contacts">
		<button>Связаться</button>
	</a>
</section>
<section id="studio" class="text-justify">
	<h1>О студии</h1>
	<p>
		&emsp; CARL JOHNSON RECORDS это студия звукозаписи и репетиционная база, созданная в 2022 году
		оказывающая полный цикл услуг, помогающих воплотить в жизнь творческие идеи в любом жанре.
	</p>
	<p>
		&emsp;Мы очень любим то, чем занимаемся и гарантируем что при работе на нашей студии мы вам
		поможем воплотить вашу задумку максимально качественно и в разумные сроки.
	</p>
	<p>
		&emsp;Наша студия находится в городе Рязань, в 5 минутах ходьбы от Олимпийского Городка. Также
		на территории есть возможность бесплатно припарковать автомобиль на время работы в нашей студии.
	</p>
	<p>
		&emsp;Для проведения репетиций в стенах нашей студии установлена акустическая система мощностью
		2 кВт, в сочетании с современным цифровым микшерным пультом с возможностью управления с планшета
		и подключения персонального мониторинга. Все группы репетирующие у нас получают помощь в
		грамотной настройке звука на репетициях, поэтому даже самые громкие группы гарантированно
		получают качественный и читаемый звук.
	</p>
</section>
<Prices {prices} />
<section id="contacts">
	<h1>контакты</h1>
	<div id="contacts-block">
		<div>
			<iframe
				id="map"
				src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=226912412712"
				frameborder="0"
				title="map"
			/>
		</div>
		<div>
			<h2 id="address" class="uppercase text-center">г. Рязань, ул. Полевая, д.58</h2>
			<Links />
		</div>
	</div>
</section>

<style>
	#main {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		padding-top: 0.5em;
		background-image: linear-gradient(359.17deg, #000000 0.74%, rgba(0, 0, 0, 0.16) 99.32%),
			url('/logo.png');
		background-size: 100%;
		background-repeat: no-repeat;
		min-height: 92vh;
		width: 100%;
	}

	#main-logo {
		background-image: url('/cj-logo.svg');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		height: 9em;
		width: 25em;
	}

	#address {
		font-size: 0.7em;
	}

	#map {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	#map {
		width: 560px;
		height: 400px;
	}

	#contacts-block {
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr;
	}

	#contacts-block :global(.links a) {
		min-width: 2em;
		min-height: 80px;
	}

	@media all and (max-width: 1024px) {
		#main-logo {
			height: 5em;
			width: 10em;
		}

		#main {
			min-height: 70vh;
		}

		#contacts-block {
			display: grid;
			grid-template-columns: 1fr;
		}

		#map {
			width: 95vw;
		}
	}
</style>
