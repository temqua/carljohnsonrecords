<script>
	const photos = [
		'/studio-photo-1.png',
		'/studio-photo-2.png',
		'/studio-photo-3.png',
		'/studio-photo-4.png',
		'/studio-photo-5.png',
		'/studio-photo-6.png'
	];
</script>

<section id="studio">
	<h1>О нашей студии</h1>
	<div class="studio-container">
		<div class="studio-content">
			&emsp;Вы ищете студию звукозаписи, чтобы превратить свои музыкальные идеи в профессиональные
			треки? Мы приглашаем вас в нашу студию звукозаписи!
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
		<div class="photos">
			{#each photos as photo}
				<div class="photo">
					<img src={photo} alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		margin: 1em;

		@media all and (min-width: 1024px) {
			margin: 1em 12rem;
		}
	}

	.studio-container {
		display: grid;
		grid-template-columns: 1fr;
		@media (min-width: 1024px) {
			text-align: justify;
			column-gap: 4rem;
			grid-template-columns: 2fr 1fr;
		}
	}

	.photos {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
		row-gap: 1rem;
		@media (min-width: 768px) and (max-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (min-width: 1024px) {
			grid-template-columns: 1fr;
		}
		@media (min-width: 1400px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.photo {
		img {
			height: 100%;
			width: 100%;
		}
	}
</style>
