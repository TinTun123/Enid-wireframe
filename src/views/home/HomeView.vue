<template>
    <div>
        <HeaderComponent v-if="type !== 'desktop'" class="fixed top-0 z-50 w-full"/>
        <div class="desktop:flex desktop:max-h-screen">
                <SidebarComponent v-if="type === 'desktop'" class="flex"/>
            <div class="desktop:flex-1 desktop:overflow-y-scroll">
                <div class="desktop:w-[840px] desktop:mx-auto">
                    <router-view class="mb-20 mt-12 tablet:mt-16"></router-view>
                </div>
            </div>
        </div>
        <ToolbarComponent v-if="type !== 'desktop'" class="fixed bottom-0 z-50"/>

    </div>
</template>


<script setup>
import HeaderComponent from "../../components/toolsbar/HeaderComponent.vue"
import ToolbarComponent from "../../components/toolsbar/ToolbarComponent.vue"
import SidebarComponent from "../../components/toolsbar/SidebarComponent.vue";
import { useBreakPoints } from "../../composible/useBreakPoints";

// eslint-disable-next-line no-unused-vars
const {width, type} = useBreakPoints();
</script>


<style>
</style>