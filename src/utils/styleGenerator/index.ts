import { getConvertedClasses } from './converter';

export const generateStyles = (html: string) => {
	let newStyles = '';
	const classArray = getInlineClassesArray(html);
	classArray.forEach((element: string) => {
		const css = `.${element}{${getConvertedClasses(element)}}`;
		newStyles += `
         ${css}`;
	});

	return newStyles;
};

const getInlineClassesArray = (html: any) => {
	let classes: any = []; // empty array

	html.replace(/class=['"][^'"]+/g, function (m: any) {
		classes = classes.concat(m.match(/[^'"]+$/)[0].split(' '));
	});
	classes = classes.filter(function (item: any, pos: any) {
		return classes.indexOf(item) == pos;
	});

	return classes;
};
