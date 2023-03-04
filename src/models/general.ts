import type { Link } from "./link";
import type { Price } from "./price";

export interface General {
	headers: {
		studio: string;
		prices: string;
		contacts: string;
	};
	buttonText: string;
	links: Link[];
    prices: Price[];
}
