<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="h-48 w-full bg-background-desaturated-dark-cyan relative ">
    <img src="../public/images/bg-header-desktop.svg" alt="" class="h-full w-full bg-no-repeat">
    <div class="absolute  -bottom-10 inset-x-96">
      <div class="bg-white rounded-md shadow-lg h-20  w-full">
        <div class="flex justify-between pt-6 px-10 space-x-48">
          <div class="flex space-x-6">
            <div class="flex bg-light-grayish-cyan items-center h-7 space-x-4 rounded-sm">
              <button class="text-background-desaturated-dark-cyan  flex h-full pl-2 font-bold">frontend <span
                  class="flex-1  rounded-md pl-4">
                  <div
                    class=" text-white bg-background-desaturated-dark-cyan hover:bg-v-dark-grayish-cyan rounded-tr-sm rounded-br-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class=" w-7 h-7 py-1.5 font-bold">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </span></button>
            </div>
            <div class="flex"><button class="text-background-desaturated-dark-cyan  flex h-full pl-2 font-bold">frontend
                <span class="flex-1  rounded-md pl-4">
                  <div
                    class=" text-white  bg-background-desaturated-dark-cyan hover:bg-v-dark-grayish-cyan rounded-tr-sm rounded-br-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class=" w-7 h-7 py-1.5 font-bold">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </span></button></div>
            <div class="flex"><button class="text-background-desaturated-dark-cyan  flex h-full pl-2 font-bold">frontend
                <span class="flex-1  rounded-md pl-4">
                  <div
                    class=" text-white  bg-background-desaturated-dark-cyan hover:bg-v-dark-grayish-cyan rounded-tr-sm rounded-br-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class=" w-7 h-7 py-1.5 font-bold ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </span></button></div>
          </div>
          <div><button class="text-background-desaturated-dark-cyan focus:outline-none hover:underline">clear</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
