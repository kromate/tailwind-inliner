// https://github.com/vitejs/vite/discussions/1791
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const initEditor = () => {
	self.MonacoEnvironment = {
		getWorker(_: string, label: string) {
			if (label === 'html' || label === 'handlebars' || label === 'razor') {
				return new htmlWorker();
			}
			if (label === 'css' || label === 'handlebars' || label === 'razor') {
				return new cssWorker();
			}
			return new editorWorker();
		},
	};
};
