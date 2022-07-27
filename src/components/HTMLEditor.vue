<template>
  <div
    ref="HTMLContainer"
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

const HTMLContainer = ref<HTMLDivElement | null>(null);

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
  editor = monaco.editor.create(HTMLContainer.value!, {
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
    }, 0)
  );

  // Set values from storage on load
  if (editorValue.value["html"]) {
    editor.setValue(editorValue.value["html"]);
    editor.restoreViewState(editorState.value["html"]);
  }
});

watch(isDark, (value) => {
  editor.updateOptions({
    theme: value ? "vs-dark" : "vs",
  });
});

const editorObserver = useResizeObserver(HTMLContainer, () => {
  editor.layout();
});

onUnmounted(() => {
  editor?.dispose();
  editorObserver.stop();
});
</script>
