<template>
  <div class="">
    <h1 id="logo" class="text-minor-xlg mt-12 mb-16 text-primary font-bold">
      Enid
    </h1>

    <div class="form">
      <form>
        <div class="username">
          <input type="text" name="username" id="username" placeholder="Username"
          class="mt-8
           
          appearance-none 
          border 
          rounded-[10px] 
          w-full 
          text-school-name 
          text-base 
          pt-2 
          pb-2 
          pl-4">
        </div>

        <div class="password mt-8">
          <input type="text" name="password" id="password" placeholder="Password"
          class="
           
          appearance-none 
          border 
          rounded-[10px] 
          w-full 
          text-school-name 
          text-base 
          pt-2 
          pb-2 
          pl-4">
        </div>

        <div class="campus relative mt-8">
          <input type="text" name="campus" id="campus" placeholder="Find your Campus"
          class="
           
          appearance-none 
          border 
          rounded-[10px] 
          w-full 
          text-school-name 
          text-base 
          pt-2 
          pb-2 
          pl-4">
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
    ml-4
    flex
    flex-nowrap
    overflow-x-scroll
    scrolling-touch
    pt-[1.25rem]
    overflow-hidden
    ">
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

    <div class="min-h-[500px]">
    </div>
  </div>
</template>

<script setup>
import facebookUrl from "./assets/images/facebook-cion.svg";
import checkUrl from './assets/images/check-icon.svg';
</script>

<style>
#card::before {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  content:  " ";
  background-image: url(logo.png);
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