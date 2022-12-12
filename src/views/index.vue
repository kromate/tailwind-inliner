<template>
  <img
    src="https://play.tailwindcss.com/img/beams.jpg"
    alt="gradient"
    class="fixed top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80"
  />
  <div
    class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255, 0))]"
  >
    <NavBar />
    
    <section class="px-2 py-16 md:py-28 md:px-0">
      <div class="container items-center max-w-6xl px-5 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2 md:px-3">
            <div
              class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
            >
              <h1
                class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-6xl max-w-md"
              >
                Convert your Tailwind classes to inline css
              </h1>
              <p
                class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
              >
                we make it easy for you to convert you tailwind classes to
                inline css, this is especially useful for those that would love
                to create email templates with tailwind
              </p>
              <div
                class="relative flex flex-col justify-start items-start sm:flex-row sm:space-x-4"
              >
                <router-link to="editor" class="btn">
                  Open Editor
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div
              class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl flex flex-col justify-center items-center border-2 border-[#272525]"
            >
              <Vue3Lottie
                :animation-data="animation"
                height="auto"
                width="auto"
                :loop="true"
                class="mx-auto w-[calc(100vw)]"
              />
              <!-- <img
              src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"
              class=""
            /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import animation from "../assets/landingAnimation.json";
</script>

<style scoped></style>
