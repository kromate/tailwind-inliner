import { createGlobalState, useDark } from '@vueuse/core';
import { initialCSSValue, initialHTMLValue } from './intials';
// import style from '../assets/tailwind.min.css';
import { generateStyles } from './styleGenerator/index';
const scriptUrl = new URL('../assets/tailwindCDN.js', import.meta.url);

export const generateHTML = (
	payload: Record<string, any>,
	isDark?: boolean
) => {
	return `<html class="${isDark ? 'dark' : ''}">
        <head>
           
            <style id="_style">${payload.css}</style>
        
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

//  <script src='${scriptUrl.href}'></script>;
// <script type="module" id="_script">
//             ${payload.javascript}

//             window.addEventListener('message', function(event) {
//                 console.log(event)
//                 if (event.data === 'theme-dark') {
//                     document.documentElement.classList.add('dark')
//                 } else if (event.data === 'theme-light') {
//                     document.documentElement.classList.remove('dark')
//                 }
//             })
//         </script>
