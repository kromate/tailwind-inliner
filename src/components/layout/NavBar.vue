<template>
  <nav class="relative select-none border-b border-black px-4">
    <div class="flex items-center justify-between h-full">
      <span
        class="p-1 md:text-3xl text-xl font-black leading-none text-gray-900"
        ><span>Tailwind-inliner</span
        ><span class="text-indigo-600">.</span></span
      >

      <div>
        <a
          class="mx-2 relative text-black flex items-center md:text-xl text-base gap-3"
          href="https://github.com/kromate/tailwind-inliner"
          target="_BLANK"
        >
          Star on Github
          <Github class="md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Github from "../icons/Github.vue";
</script>
