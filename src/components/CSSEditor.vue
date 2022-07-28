<template>
  <div ref="container" class="absolute inset-0 h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch, toRefs } from "vue";
import { useResizeObserver, useStorage, useDebounceFn } from "@vueuse/core";
import { initialEditorValue, StorageName, useDarkGlobal } from "../utils";
import * as monaco from "monaco-editor";
import { generateStyles } from "../utils/styleGenerator";
import { mountCSSEditor, unmountCSSEditor } from "../utils/editor/cssEditor";

const container = ref<HTMLDivElement | null>(null);

const editorValue = useStorage<Record<string, any>>(
  StorageName.EDITOR_VALUE,
  initialEditorValue
);

const emit =
  defineEmits<(e: "change", payload: typeof editorValue.value) => void>();

onMounted(() => {
  mountCSSEditor(container, emit);
  // emit("change", editorValue.value);
});

onUnmounted(() => {
  unmountCSSEditor();
});
</script>
