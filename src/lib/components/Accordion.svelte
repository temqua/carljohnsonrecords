<script>
	export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => (open = !open);
</script>

<div class="accordion">
	<div class="header" on:click={handleClick}>
		<div class="text">
			<slot name="head" />
		</div>
		<div>
			{#if !open}
				<svg
					width="36"
					height="36"
					viewBox="0 0 36 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.193243 16.8986L0.193243 19.285L35.9905 19.285V16.8986L0.193243 16.8986Z"
						fill="white"
					/>
					<path
						d="M19.2851 0.193157H16.8986L16.8986 35.9904L19.2851 35.9904L19.2851 0.193157Z"
						fill="white"
					/>
				</svg>
			{:else}
				<svg
					width="27"
					height="27"
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.6875 1.71557e-07L0 1.6875L25.3125 27L27 25.3125L1.6875 1.71557e-07Z"
						fill="white"
					/>
					<path d="M27 1.6875L25.3125 0L4.39673e-07 25.3125L1.6875 27L27 1.6875Z" fill="white" />
				</svg>
			{/if}
		</div>
	</div>
	{#if open}
		<div class="details" transition:slide>
			<div class="subheader">
				<slot name="subheader" />
			</div>
			<slot name="details" />
		</div>
	{/if}
</div>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border-bottom: 5px solid white;
		cursor: pointer;
	}

	.text :global(h1) {
		font-weight: bold;
		margin-block: 0.4em;
		@media all and (max-width: 1024px) {
			font-size: 1.4rem;
		}
	}

	.details {
		padding: 1rem 0;
	}
</style>
