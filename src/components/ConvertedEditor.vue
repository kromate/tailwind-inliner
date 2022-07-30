<template>
  <div ref="container" class="absolute inset-0 h-full !-z-[900000]"></div>
  <div class="relative w-full h-full">
    <button type="button" class="copy-btn action">
  
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { useStorage } from "@vueuse/core";
import { initialEditorValue, StorageName } from "../utils";
import {
  mountCSSEditor,
  unmountCSSEditor,
} from "../utils/editor/convertedEditor";

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

<script lang="ts">
export default {};
</script>

<style>
.copy-btn {
  @apply rounded-full z-[999999] bg-gray-50 opacity-0
   text-gray-500 text-xs font-semibold leading-6 py-0.5 
   pl-2 pr-2.5 flex items-center hover:bg-gray-100 
   transition-opacity select-none dark:bg-gray-700
    dark:text-gray-400 dark:hover:bg-gray-600
     pointer-events-none focus:opacity-100 
     focus:pointer-events-auto absolute bottom-[80px]
      right-[calc(14px+0.625rem)];
}

div:hover > .action {
  opacity: 1 !important;
}
</style>
