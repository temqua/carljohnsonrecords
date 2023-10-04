<div class="links">
	<a target="_blank" rel="noreferrer" href="https://vk.com/cj_rec" class="vk-link" />
	<a target="_blank" rel="noreferrer" href="https://t.me/cjrecbooking_bot" class="tg-link" />
	<a target="_blank" rel="noreferrer" href="https://instagram.com/cj_rec" class="insta-link"></a>
	<span class="insta-remark">*</span>
</div>

<style lang="scss">
	.links {
		position: relative;
		display: inline-flex;
		gap: 0.5em;
		padding: 0.5em;
		min-height: 80px;

		a {
			display: inline-block;
			min-width: 1em;
			background-size: 100%;
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	.insta-remark {
		position: absolute;
		right: 0;
		top: 16px;

		@media (min-width: 1024px) {
			top: 5px;
		}
	}

	.vk-link {
		background-image: url('/vk.svg');

		&:hover,
		&:focus {
			background-image: url('/vk-hover.svg');
		}
	}

	.tg-link {
		background-image: url('/tg.svg');

		&:hover,
		&:focus {
			background-image: url('/tg-hover.svg');
		}
	}

	.insta-link {
		background-image: url('/instagram.svg');

		&:hover,
		&:focus {
			background-image: url('/instagram-hover.svg');
		}
	}

	.email-link {
		background-image: url('/email.svg');

		&:hover,
		&:focus {
			background-image: url('/email-hover.svg');
		}
	}

	.phone-link {
		background-image: url('/phone.svg');

		&:hover,
		&:focus {
			background-image: url('/phone-hover.svg');
		}
	}
</style>
