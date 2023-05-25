<template>
    <div>
        <h3 v-if="type !== 'desktop'" 
        class="text-minor-sm 
        px-2 
        py-1 
        text-black/80 
        font-medium 
        bg-white 
        ml-4 
        mt-8 
        inline-block 
        rounded-[14px] 
        drop-shadow-drop-sha
        tablet:text-base
        tablet:ml-8
        tablet:px-3
        tablet:font-medium
        lg-tablet:ml-24
        lg-tablet:mt-12
        lg-tablet:text-major-l
        lg-tablet:rounded-full">
            Course
        </h3>
        <videosSliderComponent v-if="type !== 'desktop'" class="mt-8 tablet:mt-12" />
        <CourseDetailComponent class="mt-4 lg-tablet:mt-12"/>        
    </div>
</template>

<script setup>

import { useBreakPoints } from '../../composible/useBreakPoints';
import videosSliderComponent from '../../components/courses/videosSliderComponent.vue';
import CourseDetailComponent from '../../components/courses/CourseDetailComponent.vue';


// eslint-disable-next-line no-unused-vars
const {width, type} = useBreakPoints();

</script>

<style>

</style>