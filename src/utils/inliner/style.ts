/**
 *
 */
export interface StyleMap {
	selector: string;
	style: StyleAttr[];
}

interface StyleAttr {
	attr: string;
	value: string | number;
}

/**
 *
 */
export const toObject = (style: string): StyleAttr[] => {
	if (style) {
		return style
			.split(';')
			.map((style) => {
				const entry = style.split(':');
				if (entry.length === 2) {
					return { attr: entry[0], value: entry[1].trim() } as StyleAttr;
				}
			})
			.filter((style) => style);
	}
};

/**
 *
 */
export const clearValue = (value: string): string => {
	const rs = value.match(/\d+p/g);
	if (rs) {
		return rs[0].replace('p', '');
	}

	return '';
};
