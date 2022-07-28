import { getConvertedClasses } from './converter';

export const generateStyles = (html: string) => {
	let newStyles = '';
	const classArray = getInlineClassesArray(html);
	classArray.forEach((element: string) => {
		const css = `.${cssCompatibleName(element)}{${getConvertedClasses(
			element
		)}}`;
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

const allReplace = function (stringData: string, obj: any) {
	return stringData.replace(/[abc]/g, (m) => obj[m]);
};

const cssCompatibleName = (cssClass: string) => {
	// console.log(
	// 	cssClass.replace(/./g, (m) => (/[a-z0-9-_]/i.test(m) ? m : `\\${m}`))
	// );
	return cssClass.replace(/./g, (m) => (/[a-z0-9-_]/i.test(m) ? m : `\\${m}`));

	// return cssClass.replaceAll(':', '-').replaceAll('/', '-');
};
