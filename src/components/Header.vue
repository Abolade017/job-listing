<template>
    <header class="md:h-48 h-36 w-full bg-background-desaturated-dark-cyan relative">
        <img src="/images/bg-header-desktop.svg" alt="" class="h-full w-full bg-no-repeat" />
        <div class="absolute -bottom-20 md:-bottom-10 inset-x-4 md:inset-x-60">
            <div class="bg-white rounded-md shadow-lg md:h-20 h-28 w-full" v-if="store.show">
                <div class="flex justify-between pt-6 px-4 md:px-10 md:space-x-48">
                    <div class="flex flex-wrap md:flex-nowrap md:space-x-6 md:space-y-0 space-y-2 space-x-0">
                        <div v-for="l in filters" class="flex bg-light-grayish-cyan items-center h-7 space-x-4 rounded-sm">
                            <button class="text-background-desaturated-dark-cyan flex h-full pl-2 font-bold">
                                {{ l }}
                                <span class="flex-1 rounded-md pl-4">
                                    <div @click="store.removeFilter(l)"
                                        class="text-white bg-background-desaturated-dark-cyan hover:bg-v-dark-grayish-cyan rounded-tr-sm rounded-br-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-7 h-7 py-1.5 font-bold">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button @click="store.clearFilter"
                            class="text-background-desaturated-dark-cyan focus:outline-none hover:underline">
                            clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

import { computed } from "vue";
import { useJobStore } from "../stores/counter";

const store = useJobStore();

const filters = computed(() => store.filters);
const show=filters;

</script>