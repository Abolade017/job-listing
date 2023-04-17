import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import JobList from '../assets/data.json'

export const useJobStore = defineStore('JobList', {
  state: () => {
    return {
      jobs: JobList
    }
  },
  getters:{
    jobLists(state){
      return state.jobs
    },
    
  }
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
