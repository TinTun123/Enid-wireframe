<template>
    <div class="overflow-y-visible">
        
        <div ref="inner" 
        class="flex 
        flex-none 
        items-center 
        pl-4
        overflow-x-hidden
        pb-4
        gap-x-4 
        scroll-container
        tablet:pl-8
        tablet:gap-x-8
        lg-tablet:pl-24">
            <div v-for="course in courseStore.course" :key="course.id" 
            class="flex-none  
            w-[253px] 
            h-[169px] 
            bg-white 
            px-4 
            py-2 
            rounded-[10px] 
            relative
            tablet:w-[441px]
            tablet:h-[331px]
            lg-tablet:w-[557px]
            lg-tablet:h-[418px]">
                <!-- <div class="flex items-center h-4 absolute bottom-2 gap-x-1 tablet:bottom-4">
                    <div class="w-2 h-2 tablet:w-4 tablet:h-4">
                        <svg class="w-full h-full" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_217_372)">
                                <path fill="#4585E5" d="M0 2.73852H1.66667V5.46579H0V2.73852ZM3.33333 0.46579H5V5.46579H3.33333V0.46579Z" fill-opacity="0.7"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_217_372">
                                    <rect width="5" height="5" fill="white" transform="translate(0 0.46579)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span 
                    class="text-minor-xxsm 
                    text-black/80
                    tablet:text-minor-xsm
                    lg-tablet:text-base">{{ course.level }}</span>
                </div> -->

                <!-- <div class="flex items-center gap-x-2 absolute bottom-2 right-4 tablet:right-4 tablet:bottom-4">
                    <div class="flex items-center gap-x-1">
                        <div class="w-2 h-2 tablet:w-4 tablet:h-4">

                            <svg class="w-full h-full" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_28_174)">
                                <path fill="#4585E5" d="M5.67702 9.25839C4.76628 9.25839 3.89284 8.89911 3.24884 8.2596C2.60485 7.62008 2.24306 6.75271 2.24306 5.8483C2.24306 4.94388 2.60485 4.07651 3.24884 3.437C3.89284 2.79748 4.76628 2.4382 5.67702 2.4382C6.58777 2.4382 7.46121 2.79748 8.1052 3.437C8.74919 4.07651 9.11099 4.94388 9.11099 5.8483C9.11099 6.75271 8.74919 7.62008 8.1052 8.2596C7.46121 8.89911 6.58777 9.25839 5.67702 9.25839ZM5.67702 1.46389C4.50607 1.46389 3.38307 1.92582 2.55508 2.74805C1.72709 3.57029 1.26193 4.68548 1.26193 5.8483C1.26193 7.01111 1.72709 8.1263 2.55508 8.94854C3.38307 9.77077 4.50607 10.2327 5.67702 10.2327C6.84798 10.2327 7.97098 9.77077 8.79897 8.94854C9.62696 8.1263 10.0921 7.01111 10.0921 5.8483C10.0921 4.68548 9.62696 3.57029 8.79897 2.74805C7.97098 1.92582 6.84798 1.46389 5.67702 1.46389ZM5.92231 3.41252H5.18646V6.33545L7.51665 7.72385L7.88457 7.12465L5.92231 5.97009V3.41252ZM3.65589 1.16673L3.02797 0.421379L0.771362 2.29693L1.40419 3.04228L3.65589 1.16673ZM10.5827 2.3018L8.32608 0.421379L7.69325 1.16673L9.94985 3.04715L10.5827 2.3018Z" fill-opacity="1"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_28_174">
                                <rect width="9.81132" height="9.81132" fill="white" transform="translate(0.771362 0.0943375)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            
                        </div>
                        <div 
                        class="flex 
                        flex-col 
                        ">
                            <span class="text-minor-xxsm text-black/80 font-medium tablet:text-minor-xsm lg-tablet:text-major-sm">{{ course.time }}</span>
                        </div>
                    </div> -->
                    <!-- <div class="flex justify-center items-center gap-x-1">
                        <div class="h-2 w-2 tablet:w-4 tablet:h-4">
                            <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_28_168)">
                                <path fill-opacity="1" fill="#4585E5" d="M4.36059 5.98113V5H5.45073V5.98113H4.36059ZM2.18029 5.98113V5H3.27044V5.98113H2.18029ZM6.54088 5.98113V5H7.63103V5.98113H6.54088ZM4.36059 7.94339V6.96226H5.45073V7.94339H4.36059ZM2.18029 7.94339V6.96226H3.27044V7.94339H2.18029ZM6.54088 7.94339V6.96226H7.63103V7.94339H6.54088ZM0 9.90566V1.07547H1.63522V0.0943375H2.72537V1.07547H7.08595V0.0943375H8.1761V1.07547H9.81132V9.90566H0ZM1.09015 8.92453H8.72117V4.01887H1.09015V8.92453ZM1.09015 3.03773H8.72117V2.0566H1.09015V3.03773Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_28_168">
                                <rect width="9.81132" height="9.81132" fill="white" transform="translate(0 0.0943375)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div class="flex flex-col space-y-[-4px]">
                            <span class="text-minor-xxsm text-black/80 font-medium tablet:text-minor-xsm lg-tablet:text-major-sm">
                                {{ course.days }}
                            </span>

                        </div>


                    </div> 
                </div>-->
            </div>
            <div class="flex-none  w-1/4 h-[128px]
            tablet:w-[441px]
            tablet:h-[331px]
            lg-tablet:w-[557px]
            lg-tablet:h-[418px]"></div>
        </div>


    </div>

</template>

<script setup>
import { onMounted, ref, toRef, watch } from 'vue';
import { useTouchSwipe } from '../../composible/touchSwipe.js';
import { useCourseDetailsStore } from '../../store/courseDetailsStore';

const courseStore = useCourseDetailsStore();
const id_arr = ['0001', '0002', '0003', '0004'];
const inner = toRef(ref, 'inner');
const {currentCorID} = useTouchSwipe(inner, courseStore.totalcourse, id_arr, 'courses');


watch(currentCorID, (newval) => {
    courseStore.currentCourseID = newval;
})


onMounted(() => {
    
})





</script>

<style>

</style>