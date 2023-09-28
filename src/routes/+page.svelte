<script lang="ts">
	import Links from '$lib/components/Links.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<section id="main">
	<div id="main-logo" />
	<a class="text-center" href="#contacts">
		<img src="/arrow-down.svg" alt="" />
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
<Services />
<section id="contacts">
	<h1>Контакты</h1>
	<div id="contacts-container">
		<div>
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
			<div>
				<a href="tel:+79155938587" class="contact uppercase text-cetner">+7 915 593 85 87</a>
			</div>
			<div>
				<a href="tel:+79537372555" class="contact uppercase text-cetner">+7 953 737 25 55</a>
			</div>
			<div>
				<a href="mailto:cj.rec@ya.ru" class="contact uppercase text-cetner">cj.rec@ya.ru</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#main {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		padding-top: 0.5em;
		background-image: linear-gradient(359.17deg, #000000 0.74%, rgba(0, 0, 0, 0.16) 99.32%),
			url('/logo1.png');
		background-size: 100%;
		background-repeat: no-repeat;
		min-height: 92vh;
		width: 100%;

		@media all and (max-width: 1024px) {
			min-height: 70vh;
		}
	}

	#main-logo {
		background-image: url('/cj-logo.svg');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		height: 9em;
		width: 25em;

		@media all and (max-width: 1024px) {
			height: 5em;
			width: 10em;
		}
	}

	#address {
		margin: 0;
		font-size: 0.7em;
	}

	#map {
		width: 1200px;
		height: 600px;
		padding: 0;
		margin: 0;

		@media all and (max-width: 1024px) {
			width: 95vw;
		}
	}

	#contacts-container {
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr;

		@media all and (max-width: 1024px) {
			display: grid;
			grid-template-columns: 1fr;
		}
	}

	#contacts-container :global(.links a) {
		min-width: 2em;
		min-height: 80px;
	}

	.contact {
		padding: 1rem;
		font-size: 0.7em;
	}

	a.contact {
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
