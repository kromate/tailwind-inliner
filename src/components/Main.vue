<template>
  <main class="border-t border-gray-200 dark:border-gray-700">
    <div class="flex flex-row h-full">
      <div id="split-0" class="w-full">
        <MainEditor @change="onChange" />
      </div>
      <iframe
        ref="iframe"
        class="h-full w-full"
        sandbox="allow-scripts allow-same-origin"
        frameBorder="0"
      ></iframe>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useStorage } from "@vueuse/core";
import Split from "split.js";

import { generateHTML, useDarkGlobal } from "../utils";
import MainEditor from "./MainEditor.vue";

const iframe = ref<HTMLIFrameElement>();

const isDark = useDarkGlobal();

watch(isDark, (value) => {
  iframe.value?.contentWindow?.postMessage(
    `theme-${value ? "dark" : "light"}`,
    "*"
  );
});

const onChange = (payload: Record<string, any>) => {
  iframe.value!.srcdoc = generateHTML(payload, isDark.value);
};

onMounted(() => {
  Split(["#split-0", "iframe"]);
});
</script>

<style>
main {
  height: 100vh;
}
</style>
