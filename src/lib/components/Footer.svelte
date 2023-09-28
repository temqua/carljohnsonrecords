<footer>
	Copyright © {new Date().getFullYear()} All Rights Reserved.
	<p>
		Designed by <a target="_blank" href="https://t.me/grawler">Kirill</a>. Developed by
		<a target="_blank" href="https://temqua.github.io">Artem</a>.
	</p>
	<p>* Instagram — проект Meta Platforms Inc., деятельность которой в России запрещена.</p>
</footer>

<style lang="scss">
	footer {
		padding-bottom: 1em;
		font-size: 0.6em;
		text-align: center;
		background-color: black;
		color: white;

		p {
			background-color: black;
		}

		a {
			&:hover,
			&:focus,
			&:visited:hover,
			&:visited:focus {
				color: white;
			}

			&:link,
			&:visited {
				color: #c41111;
			}
		}
	}
</style>
