import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import JobList from '@/data.json'

export const useJobStore = defineStore('JobList', {
  state: () => {
    return {
      jobs: JobList,
      job:{
        id:'',
        languages:["HTML", "CSS","Javascript","python","Ruby",],
        level:'',
        role:'',
        location:'',
        contract:'',
        postedAt:'',
        company:'',
        logo:'',
        tools:[]
      }
      // jobLanguage:[]
    }
  },
  getters: {
    jobLists(state) {
      return state.jobs
    },
    jobLanguage(state){
      return state.job.languages
    }

  },
  actions: {
    getLang(lang:string){
     
    }
  }
})
