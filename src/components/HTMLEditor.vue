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
import * as monaco from "monaco-editor";
import { mounthtmlEditor, unmounthtmlEditor } from "../utils/editor/htmlEditor";

const container = ref<HTMLDivElement | null>(null);

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
  mounthtmlEditor(container, emit);
});

onUnmounted(() => {
  unmounthtmlEditor();
});
</script>

<script lang="ts">
export default {};
</script>
