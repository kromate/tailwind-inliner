// import { RemoveTags } from './config';

/**
 *
 */

export interface RemoveTags {
	style: boolean;
	link: boolean;
	script: boolean;
}

export const remove = (doc: HTMLElement, tags: RemoveTags) => {
	let selectors: string[] = [];
	if (tags.link) selectors.push('[rel="stylesheet"]');
	if (tags.style) selectors.push('style');
	if (tags.script) selectors.push('script');

	doc.querySelectorAll(selectors.join(',')).forEach((el: HTMLElement) => {
		if (!el.dataset.preserve) {
			el.remove();
		} else {
			// clear preserve attribute
			el.removeAttribute('data-preserve');
		}
	});
};
