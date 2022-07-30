<template>
  <div ref="container" class="absolute inset-0 h-full !-z-[900000]"></div>
  <div class="relative w-full h-full">
    <button type="button" class="copy-btn action" v-html="btnValue"></button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { useStorage } from "@vueuse/core";
import { initialEditorValue, StorageName } from "../utils";
import {
  mountConvertedEditor,
  unmountConvertedEditor,
} from "../utils/editor/convertedEditor";
import { copyConvertedHTML } from "../utils/converter";

const container = ref<HTMLDivElement | null>(null);

const { btnValue } = copyConvertedHTML();

const editorValue = useStorage<Record<string, any>>(
  StorageName.EDITOR_VALUE,
  initialEditorValue
);

const emit =
  defineEmits<(e: "change", payload: typeof editorValue.value) => void>();

onMounted(() => {
  mountConvertedEditor(container, emit);
  // emit("change", editorValue.value);
});

onUnmounted(() => {
  unmountConvertedEditor();
});
</script>

<script lang="ts">
export default {};
</script>
