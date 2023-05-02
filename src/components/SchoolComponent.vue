
<template>
    <div
    @click="picked_school"
      class="
      min-h-[11rem]
      tablet:min-h-[13rem]
      relative
      ml-5
      flex-none
      w-3/4
      rounded-b-[10px]
      rounded-tr-[10px]
      "
      :class="{'addborder' : school.choose}"
      :style="[school.choose ? {'--addborder' : addborder} : {'--addborder' : 'none'}]"
       id="card">
        <div class="
        content 
        h-full 
        relative 
        pt-4 
        px-2
        rounded-b-[10px]
        rounded-tr-[10px]
        tablet:pt-8
        tablet:pl-4
      bg-white/60
      ">
      
          <div class="text-block">
              <h1 class="text-minor-sm text-school-name font-semibold tablet:text-base tablet:font-semibold">
              {{ school.name }}
              </h1>
              <p class="
              text-minor-xxsm 
              line-clamp-6
              tablet:line-clamp-5
              leading-[0.86875rem]
               
              text-school-name 
              font-[0.6] 
              mr-[0.5rem] 
              mt-[0.51875rem]
              tablet:text-minor-xsm
              tablet:leading-[1.0875rem]
              tablet:mt-4
              tablet:mr-4">
              {{ school.description }}  
            </p>
          </div>

          <a href="#" 
          class="
          absolute 
          bottom-[0.625rem] 
          flex 
          items-center
          justify-between
          space-x-0.5
          bg-[#6094E8]
          left-2
          rounded-[16px]
          w-auto
          h-4
          pr-2
          tablet:h-6">  
            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_142_5)">
            <rect width="100%" height="100%" rx="8" fill="white"/>
            <path fill="#1153BD" d="M16 8.02005C16 3.59298 12.416 0 8 0C3.584 0 0 3.59298 0 8.02005C0 11.9018 2.752 15.1338 6.4 15.8797V10.4261H4.8V8.02005H6.4V6.01504C6.4 4.46717 7.656 3.20802 9.2 3.20802H11.2V5.61403H9.6C9.16 5.61403 8.8 5.97494 8.8 6.41604V8.02005H11.2V10.4261H8.8V16C12.84 15.599 16 12.1825 16 8.02005Z"/>
            </g>
            <defs>
            <clipPath id="clip0_142_5">
            <rect width="100%" height="100%" rx="8" fill="white"/>
            </clipPath>
            </defs>
          </svg>
            <span class="text-minor-xxsm text-white tablet:h-full tablet:leading-6 font-semibold">
              More
            </span>
          </a>
          <!-- fill="#5D5D72" school-color -->
          <span class="absolute bottom-[0.125rem] flex items-center right-[0.1975rem] w-4 h-4 tablet:w-6 tablet:h-6">
            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_120_7)">
                <path :fill="school.choose ? '#1153BD' : '#5D5D72'" d="M8.60523 0.159912C3.9676 0.159912 0.203735 3.9454 0.203735 8.60965C0.203735 13.2739 3.9676 17.0594 8.60523 17.0594C13.2429 17.0594 17.0067 13.2739 17.0067 8.60965C17.0067 3.9454 13.2429 0.159912 8.60523 0.159912ZM6.32842 12.2346L3.31229 9.20113C3.2345 9.12291 3.1728 9.03003 3.13071 8.92782C3.08861 8.82561 3.06695 8.71606 3.06695 8.60543C3.06695 8.4948 3.08861 8.38525 3.13071 8.28303C3.1728 8.18082 3.2345 8.08795 3.31229 8.00972C3.39007 7.93149 3.48241 7.86944 3.58404 7.8271C3.68567 7.78476 3.79459 7.76297 3.90459 7.76297C4.01459 7.76297 4.12352 7.78476 4.22515 7.8271C4.32677 7.86944 4.41912 7.93149 4.4969 8.00972L6.92493 10.4432L12.7052 4.62983C12.8622 4.47183 13.0753 4.38308 13.2975 4.38308C13.5196 4.38308 13.7327 4.47183 13.8898 4.62983C14.0469 4.78782 14.1351 5.0021 14.1351 5.22553C14.1351 5.44897 14.0469 5.66325 13.8898 5.82124L7.51303 12.2346C7.43531 12.3129 7.34299 12.3751 7.24135 12.4175C7.13971 12.4599 7.03076 12.4817 6.92073 12.4817C6.8107 12.4817 6.70174 12.4599 6.60011 12.4175C6.49847 12.3751 6.40615 12.3129 6.32842 12.2346Z"/>
              </g>
              <defs>
                <clipPath id="clip0_120_7">
                <rect x="0.203735" y="0.159912" width="100%" height="100%" rx="8.40149" fill="white"/>
                </clipPath>
              </defs>
            </svg>

          </span>
        </div>
      </div>
</template>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

// eslint-disable-next-line no-unused-vars
const store = useStore();
const props = defineProps({
  school : Object,
});

const addborder = ref('1px solid #6094E8');


function picked_school() {
  store.dispatch('pick_school', props.school.id);
}
</script>

<style>

#card::after {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  content:  " ";
  background-image: url(/school-logo-fococlipping-standard.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 22px;
  z-index : 100;
  border : var(--addborder)
}

#card {
  box-shadow: 3px -1px 4px rgba(0, 0, 0, 0.16);
  
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

.addborder {
  border: 1px solid #6094E8;
}


</style>