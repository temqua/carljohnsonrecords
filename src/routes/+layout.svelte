<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../global.css';
</script>

<svelte:head>
	<meta name="description" content="CARL JOHNSON RECORDS | Студия в г. Рязань" />
	<title>CARL JOHNSON RECORDS</title>
</svelte:head>
<div id="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
		background-color: black;
		color: white;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
