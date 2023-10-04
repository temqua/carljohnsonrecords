<script lang="ts">
	import Links from '$lib/components/Links.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<section id="main">
	<div id="main-logo" />
	<a id="scroll_bottom" href="#contacts" />
</section>
<section id="studio">
	<h1>О нас</h1>
	<div id="studio-content">
		<p>
			&emsp;Вы ищете студию звукозаписи, чтобы превратить свои музыкальные идеи в профессиональные
			треки? Мы приглашаем вас в нашу студию звукозаписи!
		</p>
		<p>
			&emsp;Наша студия оборудована современными технологиями и профессиональным звуковым
			оборудованием, чтобы исключительно точно передать ваше творчество и достичь идеального
			звучания.
		</p>
		<p>
			&emsp;Наша команда опытных звукорежиссеров и звукоинженеров готова работать с вами, чтобы
			помочь вам реализовать ваше музыкальное видение. Мы предлагаем широкий спектр услуг, включая
			запись вокала и инструментов, сведение, мастеринг и звуковое оформление.
		</p>
		<p>
			&emsp;Независимо от вашего музыкального жанра или уровня опыта, мы создадим комфортную и
			вдохновляющую атмосферу, чтобы вы могли выразить себя и добиться высочайшего качества звука.
		</p>
		<p>
			&emsp;Нашей целью является помощь вам достичь успеха и привести ваше звучание на следующий
			уровень. Мы предлагаем гибкие пакеты услуг для соответствия вашим потребностям и бюджету.
		</p>
		<p>
			&emsp;Так что не теряйте время! Свяжитесь с нами прямо сейчас, чтобы запланировать вашу
			следующую запись и начать воплощать ваши музыкальные мечты!
		</p>
	</div>
</section>
<Services />
<section id="contacts">
	<h1>Контакты</h1>
	<div id="contacts-container">
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
		<div>
			<iframe
				id="map"
				src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=226912412712"
				frameborder="0"
				title="map"
			/>
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

		@media all and (min-width: 1024px) {
			background-image: url('/logo.png');
		}

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
			height: 100vh;
			width: 80vw;
		}
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

	#studio-content {
		@media (min-width: 1024px) {
			padding: 0 5rem;
		}
	}

	#scroll_bottom {
		position: absolute;
		bottom: 3rem;
		display: inline-block;
		width: 72px;
		height: 35px;
		background-image: url('/arrow-down.svg');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;

		&:hover,
		&:focus {
			background-image: url('/arrow-down-hover.svg');
		}
	}
</style>
