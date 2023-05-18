<template>
    <div class="overflow-x-hidden desktop:relative">
      <!-- <div class="absolute top-[3rem] right-[-3rem] w-[9.5625rem] h-[8.3125rem] tablet:w-1/3   tablet:h-[18.125rem]">
        <svg  viewBox="0 0 153 133" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="76.5" cy="66.5" rx="76.5" ry="66.5" fill="#1153BD" fill-opacity="0.4"/>
        </svg>
      </div> -->
  
      <h1 id="logo" 
      class="mx-4 text-minor-xlg mt-12 mb-16 text-primary font-bold
            tablet:mx-8 tablet:text-minor-xxlg tablet:mt-[4rem] tablet:mb-[12rem]
            lg-tablet:text-major-xxlg lg-tablet:mb-[11rem]
            desktop:ml-[12.5rem] desktop:mb-16">
        Enid
      </h1>
  
      <div class="form mx-auto
                  px-4
                  max-w-[343px]
                  tablet:mx-auto
                  desktop:w-1/4
                  desktop:mx-auto">
        <form>
          <div class="username relative h-8 lg-tablet:h-12 desktop:h-8">
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
            bg-black/70
            text-white
            focus:placeholder:opacity-100 
            peer-focus:text-primary 
            data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none
            rounded-[16px] 
            w-full
            h-full
            border-white
            text-base 
            "
            v-model="name">
  
            <label
              for="exampleFormControlInput1"
              class="
              h-full
              pointer-events-none 
              absolute 
              top-0 
              origin-[0_0] 
              truncate
              leading-8
              lg-tablet:leading-[3rem]
              desktop:leading-8
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
              dark:peer-focus:text-primary"
              :class="name_tran">
              Username
            </label>
          </div>
  
          <div class="password relative mt-8 tablet:mt-16 h-8 lg-tablet:h-12 desktop:h-8 desktop:mt-8">
            <input type="password" name="password" id="password"
            class="
            peer
            block
            border-0
            bg-black/70
            text-white
            leading-[1.6]
            outline-none 
            transition-all 
            duration-200 
            ease-linear 
            focus:placeholder:opacity-100 
            peer-focus:text-primary 
            data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none
            rounded-[16px] 
            w-full
            h-full
            border-white
            text-base 
            "
            v-model="pwd">
  
            <label
              for="exampleFormControlInput1"
              class="
              pointer-events-none 
              absolute 
              
              h-full
              top-0 
              origin-[0_0] 
              truncate
              leading-8
              lg-tablet:leading-[3rem]
              desktop:leading-8 
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
              dark:peer-focus:text-primary"
              :class="pwd_tran">
              Password
            </label>
          </div>
  
          <div class="campus relative tablet:mt-16 h-8 mt-8 lg-tablet:h-12 desktop:h-8 desktop:mt-8">
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
            bg-black/70 
            focus:placeholder:opacity-100 
            peer-focus:text-primary 
            data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none
            rounded-[16px] 
            w-full
            h-full
            border-white
            text-base
            text-white
            "
            v-model="campus">
  
            <label
              for="exampleFormControlInput1"
              class="
              pointer-events-none 
              absolute 
              h-full
              top-0 
              origin-[0_0] 
              truncate
              leading-8
              lg-tablet:leading-[3rem]
              desktop:leading-8
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
              
              dark:peer-focus:text-primary"
              
              :class="campus_tran">
              Campus
            </label>
            <span class="absolute flex items-center inset-y-0 right-4 h-full leading-8">
              <svg fill="#ffffff" opacity="0.6" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
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
      tablet:gap-6
      overflow-x-scroll
      scrolling-touch
      pt-[1.25rem]
      tablet:pt-[1.875rem]
      tablet:mt-16
      lg-tablet:mt-12
      desktop:mt-8
      desktop:mx-[200px]
      "
  
      id="school-container"
      >
        <SchoolComponent v-for="school in store.schools" :key="school.id" :school="school" @click="print(school.id, school.title)"/>
      </div>
  
      <div class="
      absolute
      bottom-0
      login-btn
      left-0
      right-0
      w-[343px]
      h-[32px]
      mx-auto
      mb-4
      tablet:left-[50%]
      tablet:translate-x-[-50%]
      tablet:mb-8
      mt-16
      lg-tablet:relative
      lg-tablet:m-0
      lg-tablet:mt-16
      lg-tablet:mb-16">
      <button class="
      text-white 
      h-full
      w-full
      font-bold 
      text-base 
      rounded-[16px] 
      bg-gradient-to-r
      from-blue-500
      via-blue-600
      to-blue-700
      py-1
      hover:bg-gradient-br
      focus:ring-2
      focus:outline-none
      focus:ring-blue/50
      text-center" type="button" @click="login">
        Login
      </button>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from "vue";
  import {initTE, Input} from "tw-elements";
  import { useLoginStore } from "../../store/loginStore.js";
  import SchoolComponent from "./SchoolComponent.vue";
  import { useRouter } from "vue-router";
  
  onMounted(() => {
    initTE({Input});
  });
  
  const store = useLoginStore();
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const schoolID = ref();
  
  const campus = ref();
  const name = ref();
  const pwd = ref();
  
  const campus_tran = computed(() => ({
    '-translate-y-[1.5rem]' : campus.value,
    'scale-[0.7]' : campus.value,
    'pt-0' : campus.value,
    'left-0' : campus.value,
    'font-semibold' : campus.value,
    'left-3' : !campus.value,
    'text-school-name/40' : campus.value,
    'text-white' : !campus.value
  }));
  
  const name_tran = computed(() => ({
    '-translate-y-[1.5rem]' : name.value,
    'scale-[0.7]' : name.value,
    'pt-0' : name.value,
    'left-0' : name.value,
    'font-semibold' : name.value,
    'left-3' : !name.value,
    'text-black/40' : name.value,
    'text-white' : !name.value
  }));
  
  const pwd_tran = computed(() => ({
    '-translate-y-[1.5rem]' : pwd.value,
    'scale-[0.7]' : pwd.value,
    'pt-0' : pwd.value,
    'left-0' : pwd.value,
    'font-semibold' : pwd.value,
    'left-3' : !pwd.value,
    'text-school-name/40' : pwd.value,
    'text-white' : !pwd.value
  }));
  
  
  function print(id, title) {
    store.$patch((state) => {
      state.picked_id = id
    });
    campus.value = title;
  }

  function login() {
    router.push({
      path : '/home'
    })
  }
  
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