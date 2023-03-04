<script>
	import Links from './Links.svelte';
</script>

<header>
	<nav>
		<a id="logo" href="/"></a>
		<a href="#studio">
			<div>О студии</div>
		</a>
		<a href="#pricelist">
			<div>услуги и цены</div>
		</a>
		<a href="#contacts">
			<div>контакты</div>
		</a>
		<Links />
	</nav>
</header>

<style>
	#logo {
		background-image: url('/header-logo.svg');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		height: 100%;
		margin: 0 0.5em;
	}

	nav {
		display: grid;
		grid-template-columns: 1.8fr 0.8fr 1.2fr 1fr 0.8fr;
		align-items: center;
		background-color: black;
	}

	nav a {
		padding: 0.5em;
		color: white;
		text-transform: uppercase;
	}

	nav a:hover,
	nav a:focus,
	nav a:visited:hover {
		color: #c41111;
	}

	@media all and (min-width: 768px) {
		#logo {
			min-height: 2.5em;
		}
	}

	@media all and (max-width: 1024px) {
		nav {
			grid-template-columns: 1fr;
			justify-items: center;
			padding-top: 0.5em;
		}

		#logo {
			width: 90%;
			padding-bottom: 1em;
			background-image: url('/header-logo.svg');
		}
	}
</style>
