<section>
	<div />
	<a href="#contacts" />
</section>

<style lang="scss">
	section {
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

	div {
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

	a {
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
