import * as monaco from 'monaco-editor';
// import { initEditor } from '@/utils/editor/index';
import { initialEditorValue, StorageName, useDarkGlobal } from '@/utils';
import { watch } from 'vue';
import type { Ref } from 'vue';
import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core';

const isDark = useDarkGlobal();

export let cssEditor: monaco.editor.IStandaloneCodeEditor;

const editorState = useStorage<Record<string, any>>(
	StorageName.EDITOR_STATE,
	{}
);
const editorValue = useStorage<Record<string, any>>(
	StorageName.EDITOR_VALUE,
	initialEditorValue
);

let editorObserver: any;

export const mountCSSEditor = (container: Ref<HTMLDivElement>) => {
	cssEditor = monaco.editor.create(container.value!, {
		language: 'css',
		theme: isDark.value ? 'vs-dark' : 'vs',
		readOnly: true,
	});

	editorObserver = useResizeObserver(container, () => {
		cssEditor.layout();
	});

	// cssEditor.onDidChangeModelContent(
	// 	useDebounceFn(() => {
	// 		if (editorValue.value['css'] !== cssEditor.getValue()!) {
	// 			editorValue.value['css'] = cssEditor.getValue()!;
	// 			emit('change', editorValue.value);
	// 		}
	// 	}, 500)
	// );

	if (editorValue.value['css']) {
		cssEditor.setValue(editorValue.value['css']);
		cssEditor.restoreViewState(editorState.value['css']);
	}

	watch(isDark, (value) => {
		cssEditor.updateOptions({
			theme: value ? 'vs-dark' : 'vs',
		});
	});
};

export const unmountCSSEditor = () => {
	cssEditor?.dispose();
	editorObserver.stop();
};

export const updateCSSEditor = (value: any) => {
	cssEditor.setValue(value);
};
