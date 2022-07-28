import * as monaco from 'monaco-editor';
// import { initEditor } from '@/utils/editor/index';
import { initialEditorValue, StorageName, useDarkGlobal } from '@/utils';
import { watch } from 'vue';
import type { Ref } from 'vue';
import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core';
import { updateCSSEditor } from './cssEditor';
import { generateStyles } from '../styleGenerator/index';

const isDark = useDarkGlobal();

export let htmlEditor: monaco.editor.IStandaloneCodeEditor;

const editorState = useStorage<Record<string, any>>(
	StorageName.EDITOR_STATE,
	{}
);
const editorValue = useStorage<Record<string, any>>(
	StorageName.EDITOR_VALUE,
	initialEditorValue
);

let editorObserver: any;

export const mounthtmlEditor = (container: Ref<HTMLDivElement>, emit: any) => {
	htmlEditor = monaco.editor.create(container.value!, {
		language: 'html',
		theme: isDark.value ? 'vs-dark' : 'vs',
	});

	editorObserver = useResizeObserver(container, () => {
		htmlEditor.layout();
	});

	htmlEditor.onDidChangeModelContent(
		useDebounceFn(() => {
			if (editorValue.value['html'] !== htmlEditor.getValue()!) {
				editorValue.value['html'] = htmlEditor.getValue()!;
				updateCSSEditor(generateStyles(editorValue.value['html']));
				emit('change', editorValue.value);
			}
		}, 0)
	);

	if (editorValue.value['html']) {
		htmlEditor.setValue(editorValue.value['html']);
		htmlEditor.restoreViewState(editorState.value['html']);
	}

	watch(isDark, (value) => {
		htmlEditor.updateOptions({
			theme: value ? 'vs-dark' : 'vs',
		});
	});
};

export const unmounthtmlEditor = () => {
	htmlEditor?.dispose();
	editorObserver.stop();
};
