<template>
  <div class="">
    <h1 id="logo" class="mx-4 text-minor-xlg mt-12 mb-16 text-primary font-bold">
      Enid
    </h1>

    <div class="form mx-4">
      <form>
        <!-- <div class="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Example label" />
          <label
            for="exampleFormControlInput1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Example label
          </label>
        </div> -->
        <div class="username relative">
          <input type="text" name="username" id="username"
          class="
          peer
          block
          border-0
          px-3
          py-[0.32rem]
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
          border-white
          text-base 
          pt-2 
          pb-2 
          pl-4">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            mb-0 
            max-w-[90%] 
            origin-[0_0] 
            truncate 
            pt-[0.37rem] 
            leading-[1.6] 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.8] 
            peer-focus:text-primary 
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Username
          </label>
        </div>

        <div class="password mt-8 relative">
          <input type="text" name="pawword" id="password"
          class="
          peer
          block
          border-0
          px-3
          py-[0.32rem]
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
          border-white
          text-base 
          pt-2 
          pb-2 
          pl-4">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            mb-0 
            max-w-[90%] 
            origin-[0_0] 
            truncate 
            pt-[0.37rem] 
            leading-[1.6] 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.8] 
            peer-focus:text-primary 
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
            Password
          </label>
        </div>

        <div class="campus relative mt-8">
          <input type="text" name="campus" id="campus"
          class="
          peer
          block
          border-0
          px-3
          py-[0.32rem]
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
          border-white
          text-base 
          pt-2 
          pb-2 
          pl-4">

          <label
            for="exampleFormControlInput1"
            class="
            pointer-events-none 
            absolute 
            left-3 
            top-0 
            mb-0 
            max-w-[90%] 
            origin-[0_0] 
            truncate 
            pt-[0.37rem] 
            leading-[1.6] 
            transition-all 
            duration-200 
            ease-out 
            peer-focus:-translate-y-[1.5rem] 
            peer-focus:scale-[0.8] 
            peer-focus:text-primary 
            peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Username
          </label>
          <span class="absolute flex items-center inset-y-0 right-4">
            <svg fill="#5D5D72" opacity="0.6" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </span>
        </div>
      </form>
    </div>

    <!-- <div class="grid grid-cols-4 mt-12 ml-4">
      <div class="col-span-3 
      min-h-[176px]
      relative
      rounded-[10px]

      " id="card">
      <div class="
      content 
      bg-white/60
      h-full 
      relative 
      rounded-[10px] 
      pt-4 
      pl-2">
        <div class="text-block">
            <h1 class="text-minor-sm text-school-name font-semibold">
            Cherry Language School
          </h1>
          <p class="
          text-minor-xxsm 
          line-clamp-6 
          leading-[0.86875rem] 
          text-school-name 
          font-[0.6] 
          mr-[0.5rem] 
          mt-[0.51875rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iusto eligendi impedit voluptatibus harum atque quam nisi nihil ab voluptas enim nam necessitatibus praesentium minima distinctio, porro illum facilis reprehenderit.
          </p>
        </div>

        <span class="absolute bottom-[0.625rem] flex items-center left-2 w-4 h-4">
          <img src="facebook-cion.svg" class="block w-full h-full" alt="">
        </span>

        <span class="absolute bottom-[0.125rem] flex items-center right-[0.1975rem] w-4 h-4">
          <img src="check-icon.svg" class="block w-full h-full " alt="">
        </span>
      </div>
      </div>
    </div> -->

    <div class="
    mt-12 
    pl-4
    flex
    flex-nowrap
    overflow-x-scroll
    scrolling-touch
    pt-[1.25rem]
    "
    id="school-container">
      <div class="
      min-h-[176px]
      relative
      rounded-[10px]
      ml-5
      flex-none
      w-3/4
      " id="card">
      <div class="
      content 
      bg-white/60
      h-full 
      relative 
      rounded-[10px] 
      pt-4 
      pl-2">
        <div class="text-block">
            <h1 class="text-minor-sm text-school-name font-semibold">
            Cherry Language School
          </h1>
          <p class="
          text-minor-xxsm 
          line-clamp-6 
          leading-[0.86875rem] 
          text-school-name 
          font-[0.6] 
          mr-[0.5rem] 
          mt-[0.51875rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iusto eligendi impedit voluptatibus harum atque quam nisi nihil ab voluptas enim nam necessitatibus praesentium minima distinctio, porro illum facilis reprehenderit.
          </p>
        </div>

        <span class="absolute bottom-[0.625rem] flex items-center left-2 w-4 h-4">
          <img :src="facebookUrl" class="block w-full h-full" alt="">
        </span>

        <span class="absolute bottom-[0.125rem] flex items-center right-[0.1975rem] w-4 h-4">
          <img :src="checkUrl" class="block w-full h-full " alt="">
        </span>
      </div>
      </div>
      <div class="col 
      min-h-[176px]
      relative
      rounded-[10px]
      ml-9
      flex-none
      w-3/4
      " id="card">
      <div class="
      content 
      bg-white/60
      h-full 
      relative 
      rounded-[10px] 
      pt-4 
      pl-2
      ">
        <div class="text-block">
            <h1 class="text-minor-sm text-school-name font-semibold">
            Cherry Language School
          </h1>
          <p class="
          text-minor-xxsm 
          line-clamp-6 
          leading-[0.86875rem] 
          text-school-name 
          font-[0.6] 
          mr-[0.5rem] 
          mt-[0.51875rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iusto eligendi impedit voluptatibus harum atque quam nisi nihil ab voluptas enim nam necessitatibus praesentium minima distinctio, porro illum facilis reprehenderit.
          </p>
        </div>

        <span class="absolute bottom-[0.625rem] flex items-center left-2 w-4 h-4">
          <img :src="facebookUrl" class="block w-full h-full" alt="">
        </span>

        <span class="absolute bottom-[0.125rem] flex items-center right-[0.1975rem] w-4 h-4">
          <img :src="checkUrl" class="block w-full h-full " alt="">
        </span>
      </div>
      </div>
      <div class="col 
      min-h-[176px]
      relative
      rounded-[10px]
      ml-9
      flex-none
      w-3/4
      " id="card">
      <div class="
      content 
      bg-white/60
      h-full 
      relative 
      rounded-[10px] 
      pt-4 
      pl-2">
        <div class="text-block">
            <h1 class="text-minor-sm text-school-name font-semibold">
            Cherry Language School
          </h1>
          <p class="
          text-minor-xxsm 
          line-clamp-6 
          leading-[0.86875rem] 
          text-school-name 
          font-[0.6] 
          mr-[0.5rem] 
          mt-[0.51875rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iusto eligendi impedit voluptatibus harum atque quam nisi nihil ab voluptas enim nam necessitatibus praesentium minima distinctio, porro illum facilis reprehenderit.
          </p>
        </div>

        <span class="absolute bottom-[0.625rem] flex items-center left-2 w-4 h-4">
          <img :src="facebookUrl" class="block w-full h-full" alt="">
        </span>

        <span class="absolute bottom-[0.125rem] flex items-center right-[0.1975rem] w-4 h-4">
          <img :src="checkUrl" class="block w-full h-full " alt="">
        </span>
      </div>
      </div>
    </div>

    <div class="
    login-btn
    mx-4
    mt-[4.3125rem]">
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
    focus:ring-4

    focus:outline-none
    focus:ring-blue/50
    text-center" type="button">
      Login
    </button>
    </div>

  </div>
</template>

<script setup>
import facebookUrl from "./assets/images/facebook-cion.svg";
import checkUrl from './assets/images/check-icon.svg';
import { onMounted } from "vue";
import {initTE, Input} from "tw-elements";

onMounted(() => {
  initTE({Input});
})
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
#card::before {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  content:  " ";
  background-image: url(./assets/images/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 22px;
  z-index : 100;
}

#card {
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.16);
}

.content {
  clip-path: polygon(
  0% 20px, 
  3.4729px 19.6169px, 
  6.84040px 18.793952px,
  10px 17.32050px,
  12.855752193730785px 15.32088886237956px,
  15.32088886237956px 12.855752193730787px,
  17.32050807568877px 10px,
  18.793852415718167px  6.840402866513377px,
  19.69615506024416px 3.472963553338608px,
  20px 0%,
  100% 0%,
  100% 100%,
  0% 100%
  );
}
</style>