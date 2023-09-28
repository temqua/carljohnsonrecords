<header>
	<nav>
		<a id="logo" href="/" />
		<div class="flex">
			<a href="#studio">
				<div>О нас</div>
			</a>
			<a href="#contacts">
				<div>контакты</div>
			</a>
		</div>
	</nav>
</header>

<style lang="scss">
	#logo {
		background-image: url('/header-logo.svg');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		width: 518px;
		height: 29px;
		margin: 0 0.5em;

		@media all and (min-width: 768px) {
			min-height: 2.5em;
		}

		@media all and (max-width: 1024px) {
			width: 90%;
			padding-bottom: 1em;
			background-image: url('/header-logo.svg');
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: black;

		a {
			padding: 0.5em;
			color: white;
			text-transform: uppercase;

			&:hover,
			&:focus,
			&:visited:hover {
				color: #c41111;
			}
		}

		@media all and (max-width: 1024px) {
			grid-template-columns: 1fr;
			justify-items: center;
			padding-top: 0.5em;
		}
	}
</style>
