import { createGlobalState, useDark } from '@vueuse/core';
import { initialCSSValue, initialHTMLValue } from './intials';
// import style from '../assets/tailwind.min.css';
const scriptUrl = new URL('../assets/tailwindCDN.js', import.meta.url);

export const generateHTML = (
	payload: Record<string, any>,
	isDark?: boolean
) => {
	const html = payload.html;
	// console.log(html);
	let classes: any = []; // empty array

	html.replace(/class=['"][^'"]+/g, function (m) {
		classes = classes.concat(m.match(/[^'"]+$/)[0].split(' '));
	});

	classes = classes.filter(function (item, pos) {
		// console.log(item);
		return classes.indexOf(item) == pos;
	}); // return unique classes

	console.log(classes);

	return `<html class="${isDark ? 'dark' : ''}">
        <head>
            <script src="${scriptUrl.href}"></script>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
                ${payload.javascript}

                window.addEventListener('message', function(event) {
                    console.log(event)
                    if (event.data === 'theme-dark') {
                        document.documentElement.classList.add('dark')
                    } else if (event.data === 'theme-light') {
                        document.documentElement.classList.remove('dark')
                    }
                })
            </script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html`;
};

export const useDarkGlobal = createGlobalState(() => useDark());

export const initialEditorValue = {
	html: initialHTMLValue,
	css: initialCSSValue,
};
