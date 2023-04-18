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
    Joblanguage(state){
      return state.jobs.filter((t)=>{
       const lang= t.languages.valueOf()
        console.log(lang);
      })
    }
    
  },
  actions:{
    jobLang(lang:string){
      if(lang==='frontend'){
        lang=='frontend'
        console.log('frontend');
      }
    }
  }
})
