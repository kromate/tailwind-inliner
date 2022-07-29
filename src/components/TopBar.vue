<template>
  <!-- Navbar -->
  <nav class="bg-white dark:bg-gray-900">
    <div class="px-6 py-4 mx-auto flex justify-between items-center">
      <div class="flex items-center justify-between">
        <div>
          <router-link
            class="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            to="/"
            >Tailwind inliner</router-link
          >
        </div>
      </div>

      <div class="flex justify-center lg:flex lg:mt-0 lg:-mx-2">
        <a
          class="mx-2 relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
          href="https://github.com/wobsoriano/code-playground"
          target="_BLANK"
        >
          <Github />
        </a>
        <a
          class="mx-2 relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
          href="#"
          @click.prevent="toggleDark()"
        >
          <Sun v-if="isDark" />
          <Moon v-else />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { useDarkGlobal } from "../utils";
import Github from "../components/icons/Github.vue";
import Sun from "../components/icons/Sun.vue";
import Moon from "../components/icons/Moon.vue";

const isDark = useDarkGlobal();
const toggleDark = useToggle(isDark);
</script>

<style>
nav {
  height: var(--nav-height);
}
</style>
