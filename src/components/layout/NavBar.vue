<template>
  <nav class="relative select-none border-b border-black px-8">
    <div class="flex items-center justify-between h-full">
      <span class="p-1 text-3xl font-black leading-none text-gray-900"
        ><span>Tailwind-inliner</span
        ><span class="text-indigo-600">.</span></span
      >

      <div>
        <a
          class="mx-2 relative text-black flex items-center text-xl gap-3"
          href="https://github.com/kromate/tailwind-inliner"
          target="_BLANK"
        >
          Star on Github
          <Github class="w-8 h-8" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Github from "../icons/Github.vue";
</script>
