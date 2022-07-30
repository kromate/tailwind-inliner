<template>
  <div class="h-full w-full">
    <div id="html" class="pt-5 relative">
      <div
        class="absolute font-bold top-0 bg-black text-white px-3 w-full py-0.5 !h-12 dark:bg-gray-900"
      >
        HTML
      </div>
      <HTMLEditor @change="onChange" />
    </div>
    <div id="css" class="pt-5 relative">
      <div
        class="absolute font-bold -top-7 bg-slate-700 text-white px-4 py-0.5"
      >
        Converted HTML
      </div>
      <button
        class="absolute font-semibold right-0 -top-7 bg-indigo-900 text-white px-4 py-0.5"
        @click="convert"
      >
        Convert
      </button>
      <ConvertedEditor />
      <button
        type="button"
        class="copy-btn action"
        v-html="btnValue"
        @click="copyLink"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Split from "split.js";
import ConvertedEditor from "./ConvertedEditor.vue";
import HTMLEditor from "./HTMLEditor.vue";
import { onMounted } from "vue";
import { initEditor } from "../utils/editor/index";
import { convert } from "../utils/converter";
import { copyConvertedHTML } from "../utils/converter";

const emit = defineEmits(["change"]);

const { btnValue, copyLink } = copyConvertedHTML();

const onChange = (payload: Record<string, any>) => {
  emit("change", payload);
};

onMounted(() => {
  initEditor();
  Split(["#html", "#css"], {
    direction: "vertical",
    gutterSize: 28,
  });
});
</script>

<script lang="ts">
export default {};
</script>
