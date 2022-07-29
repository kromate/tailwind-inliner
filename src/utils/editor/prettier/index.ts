import './standalone';
import './css';

export const prettify = (value: any) => {
	//@ts-ignore
	let formatted = prettier.format(value, {
		parser: 'css',
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
