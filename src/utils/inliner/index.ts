import { mergeConfigurations } from './config';
import { find } from './find';
import { remove } from './remove';
import { apply, relative } from './apply';

export interface Configuration {
	url?: string;
	css?: string;
	preserveMediaQueries?: boolean;
	apply: any;
	properties: any;
	remove: any;
}

export default function cssInliner(
	content: string,
	options: Configuration = {} as Configuration
): Promise<string> {
	const config = mergeConfigurations(options);

	return new Promise((resolve, reject) => {
		const html = document.createElement('html');
		html.innerHTML = content;

		find(html, config.apply).then((styles) => {
			if (styles) {
				remove(html, config.remove);
				relative(html, config.url);

				apply(html, styles);
				resolve(html.outerHTML);
			}
		});
	});
}
