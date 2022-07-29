import './standalone';
import './html';

export const prettify = (value: any) => {
	//@ts-ignore
	let formatted = prettier.format(value, {
		parser: 'html',
		//@ts-ignore
		plugins: prettierPlugins,
		tabWidth: 4,
		printWidth: 120,
		useTabs: true,
		bracketSameLine: true,
		htmlWhitespaceSensitivity: 'ignore',
	});

	return formatted;
};
