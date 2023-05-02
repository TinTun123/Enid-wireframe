<template>
  <div class="relative overflow-x-clip">
    <div class="absolute top-[3rem] right-[-3rem] w-[9.5625rem] h-[8.3125rem] tablet:w-2/4   tablet:h-[18.125rem]">
      <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="76.5" cy="66.5" rx="76.5" ry="66.5" fill="#1153BD" fill-opacity="0.4"/>
      </svg>
    </div>
    <h1 id="logo" 
    class="mx-4 text-minor-xlg mt-12 mb-16 text-primary font-bold
          tablet:mx-8 tablet:text-minor-xxlg tablet:mt-[4rem] tablet:mb-[12rem]">
      Enid
    </h1>

    <div class="form mx-4
                tablet:mx-[8rem]">
      <form>
        <div class="username relative h-8">
          <input type="text" name="username" id="username"
          class="
          peer
          block
          border-0
          leading-[1.6]
          outline-none 
          transition-all 
          duration-200 
          ease-linear 
          focus:placeholder:opacity-100 
          peer-focus:text-primary 
          data-[te-input-state-active]:placeholder:opacity-100 
          motion-reduce:transition-none
          rounded-[10px] 
          w-full
          h-full
          border-white
          text-base 
          ">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            origin-[0_0] 
            truncate 
            text-school-name/40
            leading-8 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.7] 
            peer-focus:text-primary 
            peer-focus:font-semibold
            peer-focus:pt-0
            peer-focus:left-0
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
            peer-data-[te-input-state-active]:scale-[0.8] 
            motion-reduce:transition-none 
            dark:text-school-name/50 
            dark:peer-focus:text-primary"
            >Username
          </label>
        </div>

        <div class="password mt-8 tablet:mt-12 h-8 relative">
          <input type="password" name="password" id="password"
          class="
          peer
          block
          border-0
          leading-[1.6]
          outline-none 
          transition-all 
          duration-200 
          ease-linear 
          focus:placeholder:opacity-100 
          peer-focus:text-primary 
          data-[te-input-state-active]:placeholder:opacity-100 
          motion-reduce:transition-none
          rounded-[10px] 
          w-full
          h-full
          border-white
          text-base 
          ">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            origin-[0_0] 
            truncate 
            text-school-name/40
            leading-8 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.7] 
            peer-focus:text-primary 
            peer-focus:font-semibold
            peer-focus:pt-0
            peer-focus:left-0
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
            peer-data-[te-input-state-active]:scale-[0.8] 
            motion-reduce:transition-none 
            dark:text-school-name/50 
            dark:peer-focus:text-primary"
            >Password
          </label>
        </div>

        <div class="campus relative h-8 mt-8 tablet:mt-12">
          <input type="text" name="campus" id="campus"
          class="
          peer
          block
          border-0
          leading-[1.6]
          outline-none 
          transition-all 
          duration-200 
          ease-linear 
          focus:placeholder:opacity-100 
          peer-focus:text-primary 
          data-[te-input-state-active]:placeholder:opacity-100 
          motion-reduce:transition-none
          rounded-[10px] 
          w-full
          h-full
          border-white
          text-base 
          ">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            origin-[0_0] 
            truncate 
            text-school-name/40
            leading-8 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.7] 
            peer-focus:text-primary 
            peer-focus:font-semibold
            peer-focus:pt-0
            peer-focus:left-0
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
            peer-data-[te-input-state-active]:scale-[0.8] 
            motion-reduce:transition-none 
            dark:text-school-name/50 
            dark:peer-focus:text-primary"
            >Campus
          </label>
          <span class="absolute flex items-center inset-y-0 right-4 h-full leading-8">
            <svg fill="#5D5D72" opacity="0.6" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </span>
        </div>
      </form>
    </div>

    <div class="
    mt-12
    pr-4 
    pl-4
    tablet:pl-8
    tablet:pr-8
    flex
    flex-nowrap
    gap-4
    overflow-x-scroll
    scrolling-touch
    pt-[1.25rem]
    tablet:pt-[1.875rem]
    tablet:mt-16
    "
    id="school-container">
      <!-- <SchoolComponent v-for="school in model" :key="school.id" :school="school"></SchoolComponent> -->
      <SchoolComponent v-for="school in model" :key="school.id" :school="school"></SchoolComponent>
    </div>

    <div class="
    login-btn
    mx-4
    mt-[2rem]
    tablet:mt-[7rem]">
    <button class="
    text-white 
    font-bold 
    text-base 
    rounded-[10px] 
    bg-gradient-to-r
    from-blue-500
    via-blue-600
    to-blue-700
    w-full 
    py-1
    hover:bg-gradient-br
    focus:ring-2

    focus:outline-none
    focus:ring-blue/50
    text-center" type="button">
      Login
    </button>
    </div>

  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import {initTE, Input} from "tw-elements";
import { useStore } from "vuex";
import SchoolComponent from "./components/SchoolComponent.vue";

onMounted(() => {
  initTE({Input});
});

const store = useStore();
const model = ref({
});

onMounted(() => {
  model.value = {
    ...store.state.schools
  }
});

// const schools = computed(() => {
//   return store.state.schools;
// })


// eslint-disable-next-line no-unused-vars
watch(() => store.state.schools, (newVal, oldVal) => {
  model.value = {
    ...JSON.parse(JSON.stringify(newVal))
  };
  // console.log("newValn",newVal);
  // console.log("App watch -> model.value", model.value);
});




</script>

<style>


#school-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}


#school-container::-webkit-scrollbar {
  display: none;
}
</style>