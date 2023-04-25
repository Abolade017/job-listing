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
  <div class="bg-white mt-20 mx-96 rounded-md shadow-lg" v-for="job in jobs" :key="job.id">
    <div class="flex justify-between py-6 px-10 items-center">
      <div class="flex space-x-4">
        <div class="rounded-full h-14 w-14"><img :src="`/src/assets/images/`+job.logo" alt="company_logo"
            class="h-full w-full"></div>
        <div class="flex md:flex-col space-y-2">
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
            <p class="text-body capitalize text-background-desaturated-dark-cyan">{{ job.role }}</p>
          </div>
          <div class="flex space-x-4">
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
      <div class="flex space-x-4 ">
        <button
          class="bg-light-grayish-cyan  hover:text-white   px-2 py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.role">
          <p class="px-2">{{ job.role }}</p>
        </button>
        <button
          class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.level">
          <p class="px-2">{{ job.level }}</p>
        </button>
        <button v-for="i in job.languages" :key="i" @click="selectLanguage"
          class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan"
          :value="job.languages">
          <p class="px-2"> {{ i }}</p>
        </button>
        <button v-for="tool in job.tools" :key="tool"
          class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
          <p class="px-2">{{ tool }}</p>
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
