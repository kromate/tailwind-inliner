<template>
  <div
    ref="container"
    class="absolute inset-x-0 top-[28px] h-[calc(100%-28px)]"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch, toRefs } from "vue";
import { useResizeObserver, useStorage, useDebounceFn } from "@vueuse/core";
import { initialEditorValue, StorageName, useDarkGlobal } from "../utils";

// Import monaco
// https://github.com/vitejs/vite/discussions/1791
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
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
    language: "html",
    theme: isDark.value ? "vs-dark" : "vs",
  });

  emit("change", editorValue.value);

  editor.onDidChangeModelContent(
    useDebounceFn(() => {
      if (editorValue.value["html"] !== editor.getValue()!) {
        editorValue.value["html"] = editor.getValue()!;
        emit("change", editorValue.value);
      }
    }, 500)
  );

  // Set values from storage on load
  if (editorValue.value["html"]) {
    editor.setValue(editorValue.value["html"]);
    editor.restoreViewState(editorState.value["html"]);
  }
});

// watch(activeTab, (currentTab, prevTab) => {
//   monaco.editor.setModelLanguage(editor.getModel()!, currentTab);

//   editorState.value[prevTab] = editor.saveViewState();

//   if (editorValue.value[currentTab]) {
//     editor.setValue(editorValue.value[currentTab]);
//   } else {
//     editor.setValue("");
//   }

//   if (editorState.value[currentTab]) {
//     editor.restoreViewState(editorState.value[currentTab]!);
//     editor.focus();
//   }
// });

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
