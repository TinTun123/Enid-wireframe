<template>
    <div>
        <div ref="container" class="flex flex-nowrap gap-x-8 mt-8 pl-8 rouned-[10px] overflow-x-scroll scroll-container">
            <div class="h-[200px] flex-none w-[300px] text-red-400 bg-slate-400">1</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">2</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">3</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">4</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">5</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">6</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">7</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">8</div>
        </div>

        <div class="mt-4 flex gap-x-4">
            <button @click="previous()" class="p-4 rounded-[10px] border border-red-300">previous</button>
            <button @click="next()" class="p-4 rounded-[10px] border border-red-300">next</button>
        </div>

        <div ref="container02" class="flex flex-nowrap gap-x-8 mt-8 pl-8 rouned-[10px] overflow-x-scroll">
            <div class="h-[200px] flex-none w-[300px] text-red-400 bg-slate-400">1</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">2</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">3</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">4</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">5</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">6</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">7</div>
            <div class="h-[200px] w-[300px] flex-none bg-slate-400">8</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTouchSwipe } from '../../composible/touchSwipe';

const container = ref(null);
const container02 = ref(null);


const {currentID} = useTouchSwipe(container02, 8, ['1', '2', '3', '4', '5', '6', '7', '8'], 'course');

function next() {
    console.log(container.value.children[0].clientWidth);
    container.value.scrollLeft += container.value.children[0].clientWidth + 32;
}

function previous() {

    container.value.scrollLeft -= container.value.children[0].clientWidth - 32;
    
}
</script>


<style>
</style>