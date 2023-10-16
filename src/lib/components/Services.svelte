<script lang="ts">
	import Accordion from './Accordion.svelte';
	export let header = 'Услуги и цены';
</script>

<section id="servicelist">
	<h1>Услуги</h1>
	<div id="services">
		<Accordion>
			<span slot="head"><h1>Запись песни</h1></span>
			<span slot="subheader">1 ЧАС РАБОТЫ СО ЗВУКОРЕЖИССЕРОМ : 900₽</span>
			<div slot="details" class="service">
				<div>
					<ul>
						<li>Час работы со звукорежиссером</li>
						<li>Звукозапись (запись вокала или инструментов)</li>
						<li>Сведение на месте</li>
						<li>Монтаж</li>
						<li>Корректировки по пожеланиям артиста</li>
					</ul>
				</div>
				<div class="photo">
					<img src="recording.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Сведение</h1></span>
			<span slot="subheader">СВЕДЕНИЕ ИНСТРУМЕНТАЛА И ГОЛОСА: от 3000₽</span>

			<div slot="details" class="service">
				<div>
					<ul>
						<li>Монтаж</li>
						<li>Эквализация</li>
						<li>Тональная коррекция голоса (выравнивание нот)</li>
						<li>Динамическая обработка</li>
						<li>Пространственная обработка</li>
						<li>Мастеринг</li>
					</ul>
				</div>
				<div class="photo">
					<img src="mixing.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Мастеринг</h1></span>
			<span slot="subheader"
				>STEM МАСТЕРИНГ: от 2500₽
				<p>МАСТЕРИНГ ОДНОЙ ДОРОЖКИ: от 2000₽</p>
			</span>
			<div slot="details" class="service">
				<div>
					<ul>
						<li>Финализация песни под стандарты музыкальных площадок</li>
						<li>Исправление возможных ошибок сведения</li>
						<li>Свежий взгляд на ваш трек</li>
					</ul>
				</div>
				<div class="photo">
					<img src="mastering.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Аранжировка/бит</h1></span>
			<span slot="subheader">НАПИСАНИЕ АРАНЖИРОВКИ: от 6000₽</span>
			<div slot="details" class="service">
				<div>
					<ul>
						<li>Авторская аранжировка по вашим пожеланиям</li>
						<li>При необходимости запишем живые инструменты</li>
						<li>Работаем пока не достигнем результата</li>
					</ul>
				</div>
				<div class="photo">
					<img src="beat.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Подарочная песня</h1></span>
			<span slot="subheader">ЗАПИСЬ ПЕСНИ-ПОДАРКА: от 4000₽</span>
			<div slot="details" class="service">
				<div>
					<ul>
						<li>Отличный подарок на свадьбу, день рождения и прочее</li>
						<li>Поможем пободрать минус</li>
						<li>Подскажем как исполнить</li>
						<li>Выровняем ноты голоса</li>
						<li>Сделаем сведение и мастеринг</li>
					</ul>
				</div>
				<div class="photo">
					<img src="gift-song.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Проведение репетиций</h1></span>
			<span slot="subheader">ПРОВЕДЕНИЕ РЕПЕТИЦИЙ ГРУППЫ ИЛИ СОЛО: 400₽/ЧАС</span>
			<div slot="details" class="service">
				<div>
					<ul>
						<li>Проведение репетиций группы или соло</li>
						<li>Настроим качественный звук</li>
						<li>Доступен персональный мониторинг</li>
						<li>Можно взять в прокат гитару или бас-гитару</li>
					</ul>
				</div>
				<div class="photo">
					<img src="rehearsal.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="head"><h1>Аренда студии</h1></span>
			<span slot="subheader">
				<p>АРЕНДА СТУДИИ БЕЗ ЗВУКОРЕЖИССЕРА</p>
				<p>2 ЧАСА: 1400₽, 4 ЧАСА: 2500₽, НОЧЬ: 5000₽</p>
			</span>
			<div slot="details" class="service">
				<div>
					<p>НАШЕ ОБОРУДОВАНИЕ:</p>
					<ul>
						<li>Компьютер Intel i5 12400F</li>
						<li>DAW: Reaper, FL Studio</li>
						<li>Звуковая карта Atruria MiniFuse4</li>
						<li>Микрофон: СОЮЗ 1973</li>
						<li>Студийные мониторы: PreSonus Eris E7 XT</li>
					</ul>
				</div>
				<div class="photo">
					<img src="rent.png" alt="CARL JOHNSON RECORDS | Студия в г. Рязань" />
				</div>
			</div>
		</Accordion>
	</div>
</section>

<style lang="scss">
	section {
		margin: 1em;

		@media all and (min-width: 1024px) {
			margin: 1em 12rem;
		}
	}

	#services {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
		text-transform: uppercase;

		@media all and (max-width: 1024px) {
			grid-template-columns: 1fr;
		}
	}

	.service {
		display: grid;
		grid-template-columns: 1fr;
		text-transform: initial;
		@media all and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.photo {
		img {
			display: none;
			@media all and (min-width: 1024px) {
				display: block;
				width: 17rem;
			}
		}
		@media all and (min-width: 1024px) {
			justify-self: end;
		}
	}
</style>
