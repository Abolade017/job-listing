import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import JobList from '@/data.json'
interface Job {
  id: string | number,
  languages: string[],
  level: string,
  role: string,
  location: string,
  contract: string,
  postedAt: string,
  company: string,
  logo: string,
  tools: string[]

}
export const useJobStore = defineStore('JobList', {
  state: () => {
    return {
      jobs: JobList,
      show: false,
      Language: [],
      filters: [] as string[],

    }
  },
  getters: {
    jobLists(state) {
      return state.jobs
    },
    filteredJobs(state) {
      if (state.filters.length == 0) return this.jobs;

      return this.jobs.filter((job: any) => {
        const matched = job.languages.filter((lang: string) => this.filters.includes(lang));


        // if (matched.length >= this.filters.length) {
        if (matched.length > 0) {
          return true;
        }

        return false
      });
    },



  },
  actions: {
    addToFilter(lang: string) {
      if (this.filters.includes(lang)) return;

      this.filters.push(lang);
      return this.show = true
    },
    removeFilter(lang: string) {
      this.filters = this.filters.filter((l: string) => l != lang);
    },
    clearFilter() {
      if (this.filters.length) {
        this.show = false
        return this.filters.length = 0;


      }
    }
  }
})
