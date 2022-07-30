import * as monaco from 'monaco-editor';
// import { initEditor } from '@/utils/editor/index';
import { initialEditorValue, StorageName, useDarkGlobal } from '@/utils';
import { watch } from 'vue';
import type { Ref } from 'vue';
import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core';

const isDark = useDarkGlobal();

export let ConvertedEditor: monaco.editor.IStandaloneCodeEditor;

const editorState = useStorage<Record<string, any>>(
	StorageName.EDITOR_STATE,
	{}
);
const editorValue = useStorage<Record<string, any>>(
	StorageName.EDITOR_VALUE,
	initialEditorValue
);

let editorObserver: any;

export const mountConvertedEditor = (
	container: Ref<HTMLDivElement>,
	emit: any
) => {
	ConvertedEditor = monaco.editor.create(container.value!, {
		language: 'html',
		theme: isDark.value ? 'vs-dark' : 'vs',
		readOnly: true,
	});

	editorObserver = useResizeObserver(container, () => {
		ConvertedEditor.layout();
	});

	// ConvertedEditor.onDidChangeModelContent(
	// 	useDebounceFn(() => {
	// 		if (editorValue.value['Converted'] !== ConvertedEditor.getValue()!) {
	// 			editorValue.value['Converted'] = ConvertedEditor.getValue()!;
	// 			emit('change', editorValue.value);
	// 		}
	// 	}, 500)
	// );

	if (editorValue.value['Converted']) {
		ConvertedEditor.setValue(editorValue.value['Converted']);
		ConvertedEditor.restoreViewState(editorState.value['Converted']);
	}

	watch(isDark, (value) => {
		ConvertedEditor.updateOptions({
			theme: value ? 'vs-dark' : 'vs',
		});
	});
};

export const unmountConvertedEditor = () => {
	ConvertedEditor?.dispose();
	editorObserver.stop();
};

export const updateConvertedHTMLEditor = (value: any) => {
	ConvertedEditor.setValue(value);
};

export const getConvertedValue = () => ConvertedEditor.getValue()!;
