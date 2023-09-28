<script>
	import Links from '$lib/components/Links.svelte';
</script>

<header>
	<nav>
		<a id="logo" href="/" />
		<a href="#studio">
			<div>О студии</div>
		</a>
		<a href="#pricelist">
			<div>услуги</div>
		</a>
		<a href="#contacts">
			<div>контакты</div>
		</a>
		<Links />
	</nav>
</header>

<style lang="scss">
	#logo {
		background-image: url('/header-logo.svg');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		height: 100%;
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
		display: grid;
		grid-template-columns: 1.8fr 0.8fr 1.2fr 1fr 0.8fr;
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
