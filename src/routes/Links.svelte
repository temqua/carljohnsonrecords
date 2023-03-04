<script lang="ts">
	import type { Link } from '../models/link';
	export let links: Link[];
	const defaultLinks: Link[] = [
		{
			class: 'phone-link',
			href: 'tel:+79155938587'
		},
		{
			class: 'vk-link',
			href: 'https://vk.com/cj_rec'
		},
		{
			class: 'tg-link',
			href: 'https://t.me/grawler'
		},
		{
			class: 'insta-link',
			href: 'https://instagram.com/cj_rec'
		},
		{
			class: 'email-link',
			href: 'mailto:cjrec@yandex.ru'
		}
	];
	$: if (!links) {
		links = defaultLinks;
	}
</script>

{#if links && links.length}
	<div class="links">
		{#each links as link}
			<a target="_blank" rel="noreferrer" href="{link.href}" class="{link.class}" />
		{/each}
	</div>
{/if}

<style>
	.links {
		display: inline-flex;
		gap: 0.5em;
		padding: 0.5em;
		min-height: 80px;
	}

	.links a {
		display: inline-block;
		min-width: 1em;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
	}

	.vk-link {
		background-image: url('/vk.svg');
	}

	.tg-link {
		background-image: url('/tg.svg');
	}

	.insta-link {
		background-image: url('/instagram.svg');
	}

	.email-link {
		background-image: url('/email.svg');
	}

	.phone-link {
		background-image: url('/phone.svg');
	}

	.phone-link:hover,
	.phone-link:focus {
		background-image: url('/phone-hover.svg');
	}

	.email-link:hover,
	.email-link:focus {
		background-image: url('/email-hover.svg');
	}

	.tg-link:hover,
	.tg-link:focus {
		background-image: url('/tg-hover.svg');
	}

	.vk-link:hover,
	.vk-link:focus {
		background-image: url('/vk-hover.svg');
	}

	.insta-link:hover,
	.insta-link:focus {
		background-image: url('/instagram-hover.svg');
	}
</style>
