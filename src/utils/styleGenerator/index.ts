export const generateStyles = (html: string) => {
	const classArray = getInlineClassesArray;
};

const getInlineClassesArray = (html: any) => {
	let classes: any = []; // empty array

	html.replace(/class=['"][^'"]+/g, function (m: any) {
		classes = classes.concat(m.match(/[^'"]+$/)[0].split(' '));
	});
	classes = classes.filter(function (item: any, pos: any) {
		return classes.indexOf(item) == pos;
	});
};
