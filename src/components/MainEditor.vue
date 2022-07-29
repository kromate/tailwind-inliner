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
      <div
        class="absolute font-bold right-0 -top-7 bg-indigo-900 text-white px-4 py-0.5"
      >
        Convert
      </div>
      <CSSEditor @change="onChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Split from "split.js";
import CSSEditor from "./CSSEditor.vue";
import HTMLEditor from "./HTMLEditor.vue";
import { onMounted } from "vue";
import { initEditor } from "../utils/editor/index";

const emit = defineEmits(["change"]);

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

<style lang="scss">
.gutter {
  @apply dark:bg-gray-900 bg-no-repeat;
  background-position: 50%;
}

.gutter.gutter-vertical {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
  cursor: row-resize;
}
</style>
