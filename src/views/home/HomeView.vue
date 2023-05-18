<template>
    <div>
        <HeaderComponent v-if="type !== 'desktop'" class="fixed top-0 z-50 w-full"/>
        <div class="desktop:flex">
                <SidebarComponent v-if="type === 'desktop'" class="flex"/>
            <div class="">
                <router-view class="mb-20 mt-12 tablet:mt-16"></router-view>
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