<script setup lang="ts">
import { useJobStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { computed } from 'vue'
const store = useJobStore()
const jobs = computed(() => {
  return store.jobLists
})
const lang = computed(() => { return store.jobLanguage })
function selectLanguage() {
  return store.getLang
}
</script>

<template>
  <div class="bg-white mt-10 w-auto mx-4 md:mx-60 rounded-md shadow-2xl md:shadow-lg" v-for="job in jobs" :key="job.id">
    <div class="flex md:flex-row flex-col md:justify-between  justify-start py-6 md:px-10 px-4 items-start md:items-center">
      <div class="flex flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-2">
        <div class="rounded-full h-14 w-14 -mt-12 md:mt-0"><img :src="job.logo" :alt="job.company"></div>
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-2">
            <div>
              <p class="text-background-desaturated-dark-cyan text-body capitalize">{{ job.company }}</p>
            </div>
            <div class="  bg-background-desaturated-dark-cyan rounded-lg uppercase text-body text-white">
              <p class="px-2"> new!</p>
            </div>
            <div class=" rounded-lg  bg-v-dark-grayish-cyan uppercase text-body text-white">
              <p class="px-2">Features</p>
            </div>
          </div>
          <div>
            <p class="text-body capitalize text-v-dark-grayish-cyan font-bold">{{ job.position }}</p>
          </div>
          <div class="flex space-x-4 md:pb-0 pb-4">
            <div>
              <p class="text-dark-grayish-cyan text-sm"> {{ job.postedAt }} .</p>
            </div>
            <div>
              <p class="text-dark-grayish-cyan text-sm">{{ job.contract }} .</p>
            </div>
            <div>
              <p class="text-dark-grayish-cyan text-sm">{{ job.location }} </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex md:flex-nowrap flex-wrap space-x-4 border-t-2 md:border-none md:pt-0 pt-4 space-y-2 md:space-y-0 items-start ">
        <button
          class="bg-light-grayish-cyan  hover:text-white   px-2 py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.role">
          <p class="px-2">{{ job.role }}</p>
        </button>
        <button
          class="bg-light-grayish-cyan  hover:text-white py-0 md:py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.level">
          <p class="px-2">{{ job.level }}</p>
        </button>
        <button v-for="i in job.languages" :key="i" @click="selectLanguage"
          class="bg-light-grayish-cyan  hover:text-white py-0 md:py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.languages">
          <p class="px-2"> {{ i }}</p>
        </button>
        <button v-for="tool in job.tools" :key="tool"
          class="bg-light-grayish-cyan  hover:text-white  py-0 md:py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
          <p class="px-2">{{ tool }}</p>
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
