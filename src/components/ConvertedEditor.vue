<template>
  <div ref="container" class="absolute inset-0 h-full !-z-[900000]"></div>
  <div class="relative w-full h-full">
    <button type="button" class="copy-btn action">
      <svg
        viewBox="0 0 20 20"
        class="w-5 h-5 text-gray-400 flex-none mr-1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M7 4.75H5.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H13"
        ></path>
        <path
          d="M12 6.25H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM7.75 10.25h4.5M7.75 13.25h4.5"
        ></path></svg
      ><span class=""
        >Copy<span class="sr-only">, then focus editor</span></span
      >
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
