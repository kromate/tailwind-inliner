<template>
  <div ref="container" class="absolute inset-0 h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch, toRefs } from "vue";
import { useResizeObserver, useStorage, useDebounceFn } from "@vueuse/core";
import { initialEditorValue, StorageName, useDarkGlobal } from "../utils";

// Import monaco
// https://github.com/vitejs/vite/discussions/1791
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === "css" || label === "handlebars" || label === "razor") {
      return new cssWorker();
    }
    return new editorWorker();
  },
};

const container = ref<HTMLDivElement | null>(null);

let editor: monaco.editor.IStandaloneCodeEditor;

const isDark = useDarkGlobal();

const editorState = useStorage<Record<string, any>>(
  StorageName.EDITOR_STATE,
  {}
);
const editorValue = useStorage<Record<string, any>>(
  StorageName.EDITOR_VALUE,
  initialEditorValue
);

const emit =
  defineEmits<(e: "change", payload: typeof editorValue.value) => void>();

onMounted(() => {
  editor = monaco.editor.create(container.value!, {
    language: "css",
    theme: isDark.value ? "vs-dark" : "vs",
  });

  emit("change", editorValue.value);

  editor.onDidChangeModelContent(
    useDebounceFn(() => {
      if (editorValue.value["css"] !== editor.getValue()!) {
        editorValue.value["css"] = editor.getValue()!;
        emit("change", editorValue.value);
      }
    }, 500)
  );

  // Set values from storage on load
  if (editorValue.value["css"]) {
    editor.setValue(editorValue.value["css"]);
    editor.restoreViewState(editorState.value["css"]);
  }
});

watch(isDark, (value) => {
  editor.updateOptions({
    theme: value ? "vs-dark" : "vs",
  });
});

const editorObserver = useResizeObserver(container, () => {
  editor.layout();
});

onUnmounted(() => {
  editor?.dispose();
  editorObserver.stop();
});
</script>
