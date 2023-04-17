<script setup lang="ts">
import { useJobStore } from '@/stores/counter';
import { computed } from 'vue'
const store = useJobStore()
const jobs = computed(() => {
  return store.jobLists

})

</script>

<template>
  <main>
    <div class="bg-white mt-20 mx-96 rounded-md shadow-lg" v-for="job in jobs" :key="job.id">
      <div class="flex justify-between py-6 px-10 items-center">
        <div class="flex space-x-4">
          <div class="rounded-full h-12 w-12"><img :src="job.logo" alt="company_logo" class="h-full w-full"></div>
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
      <div class="flex space-x-4 " >
        <button
        v-for="i in job.languages" :key="i"
          class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
          <p class="px-2"> {{ i }}</p>
        </button>
      </div>

        <!-- <button
            class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
            <p class="px-2"> {{job.languages[1]}}</p>
        </button>
        <button
            class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
            <p class="px-2"> HTML</p>
          </button>
          <button
            class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
            <p class="px-2"> CSS</p>
          </button>
          <button
            class="bg-light-grayish-cyan  hover:text-white  py-1 hover:bg-background-desaturated-dark-cyan rounded-sm h-8 text-background-desaturated-dark-cyan">
            <p class="px-2"> JavaScript</p>
          </button> -->
      </div>
    </div>
  </main>
</template>
<style></style>
