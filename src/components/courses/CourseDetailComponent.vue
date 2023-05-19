<template>
    <transition>
        <div :key="courseStore.currentCourseID">
            <div v-if="type === 'desktop'" class="w-full h-[335px] bg-neutral-400 ml-4 rounded-[10px] desktop:w-[611px] desktop:mx-auto">

            </div>
            <h3 
            class="text-base 
            font-medium
            border-l-4 
            border-primary 
            pl-2 
            py-2 
            mb-4 
            ml-4
            tablet:text-minor-l
            tablet:text-black/90
            tablet:mx-8
            lg-tablet:ml-24
            lg-tablet:text-major-lg
            lg-tablet:mb-8
            desktop:text-major-l
            desktop:font-medium
            desktop:mt-12
            desktop:pl-4
            desktop:w-[611px]
            desktop:mx-auto
            
            "> {{ courseStore.currentSyllabus[0].title }}</h3>
            
            <p 
            class="text-minor-sm 
            text-black/70 
            leading-[19.2px] 
            mb-7 
            indent-7 
            mx-4
            tablet:text-minor-sm
            tablet:w-3/5
            tablet:leading-[19.995px]
            tablet:mx-8
            lg-tablet:ml-24
            lg-tablet:text-base
            lg-tablet:leading-[24px]
            lg-tablet:mb-12
            lg-tablet:w-4/5
            desktop:text-base
            desktop:leading-[24px]
            desktop:w-[611px]
            desktop:mx-auto
            desktop:mb-8">
                {{ courseStore.currentSyllabus[0].descri }}
            </p>

            <h4 
            class="text-sm 
            text-black/80 
            font-medium 
            mb-2 
            ml-4 
            tablet:text-base 
            tablet:font-medium
            tablet:mx-8
            lg-tablet:text-major-l
            lg-tablet:ml-24
            lg-tablet:mb-8
            desktop:w-[611px]
            desktop:mx-auto">Course Syllabus</h4>

            <div class="flex 
            flex-nowrap 
            items-stretch 
            gap-x-9 
            pl-4 
            pr-4 
            pt-4 
            overflow-x-scroll 
            scroll-container 
            tablet:pl-8
            lg-tablet:block
            lg-tablet:ml-24
            lg-tablet:p-0
            desktop:w-[611px]
            desktop:mx-auto
            desktop:block">

                <div v-for="(weeks, i) in courseStore.currentSyllabus[0].syllabus" :key="i" 
                class="
                w-[253px] 
                relative 
                flex-none 
                h-auto 
                drop-shadow-drop-sha 
                bg-white
                tablet:w-[395px]
                lg-tablet:bg-transparent 
                lg-tablet:rounded-0 
                desktop:rounded-[10px]  
                rounded-[10px] 
                lg-tablet:w-auto
                ">
                    
                    <div v-if="(type === 'phone' || type === 'tablet') || (currentWeek === i && (type === 'lg-tablet' || type === 'desktop'))" class="m-4 lg-tablet:m-0 lg-tablet:grid lg-tablet:grid-cols-12 lg-tablet:gap-x-4 lg-tablet:gap-y-4 lg-tablet:mr-4 desktop:m-0 desktop:overflow-x-hidden">
                        <transition appear>
                            <div 
                            class="lg-tablet:bg-white 
                            lg-tablet:col-span-4 
                            lg-tablet:p-4 
                            lg-tablet:rounded-[10px] 
                            transition-opacity
                            desktop:col-span-5
                            lg-tablet:relative">
                                <div class="flex items-center gap-x-1 mb-1 desktop:mb-2">
                                    <div class="w-2 h-2 tablet:w-3 tablet:h-3 lg-tablet:absolute lg-tablet:right-4">
                                        <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_31_275)">
                                                <path class="fill-black/60 lg-tablet:fill-primary" d="M9.02427 7.5C9.28302 7.5 9.53117 7.39464 9.71413 7.20711C9.89709 7.01957 9.99988 6.76522 9.99988 6.5V1C9.99988 0.734784 9.89709 0.48043 9.71413 0.292893C9.53117 0.105357 9.28302 0 9.02427 0H3.8828C4.05354 0.305 4.14622 0.65 4.14622 1H9.02427V6.5H4.63402V7.5M6.58524 2.5V3.5H3.65841V10H2.6828V7H1.7072V10H0.731585V6H-0.00012207V3.5C-0.00012207 3.23478 0.102665 2.98043 0.285627 2.79289C0.46859 2.60536 0.71674 2.5 0.975488 2.5H6.58524ZM3.17061 1C3.17061 1.26522 3.06782 1.51957 2.88486 1.70711C2.7019 1.89464 2.45375 2 2.195 2C1.93625 2 1.6881 1.89464 1.50514 1.70711C1.32218 1.51957 1.21939 1.26522 1.21939 1C1.21939 0.734784 1.32218 0.48043 1.50514 0.292893C1.6881 0.105357 1.93625 0 2.195 0C2.45375 0 2.7019 0.105357 2.88486 0.292893C3.06782 0.48043 3.17061 0.734784 3.17061 1Z"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_31_275">
                                                <rect width="10" height="10" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h4 
                                    class="text-minor-xxsm 
                                    text-black/80
                                    tablet:text-minor-xsm 
                                    lg-tablet:text-major-sm
                                    lg-tablet:border-l-2
                                    lg-tablet:border-primary
                                    lg-tablet:pl-2
                                    ">LECTURE</h4>
                                </div>

                                <ol class="list-decimal ml-4 mb-3">
                                    <li v-for="(lecture, i) in weeks.lectures" :key="i" 
                                    class="text-minor-xxsm 
                                    font-medium 
                                    text-black/90 
                                    tablet:text-minor-xsm 
                                    tablet:font-medium 
                                    lg-tablet:text-major-sm">{{lecture}}</li>
                                </ol>
                            </div>
                        </transition>
                            
                        

                        <!-- EXERCISE -->
                        <transition appear>
                            <div 
                            class="lg-tablet:bg-white 
                            lg-tablet:col-span-4 
                            lg-tablet:p-4 
                            lg-tablet:rounded-[10px]
                            desktop:col-span-5
                            lg-tablet:relative">
                                <div class="flex items-baseline gap-x-1 mb-1 desktop:mb-2">
                                    <div class="w-2 h-2 tablet:w-3 tablet:h-3 lg-tablet:absolute lg-tablet:right-4">
                                        <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_32_582)">
                                                <path class="fill-black/60 lg-tablet:fill-primary" d="M1.49988 0.714286C1.49988 0.319196 1.72332 0 1.99988 0H2.49988C2.77644 0 2.99988 0.319196 2.99988 0.714286V4.28571V5.71429V9.28571C2.99988 9.6808 2.77644 10 2.49988 10H1.99988C1.72332 10 1.49988 9.6808 1.49988 9.28571V7.85714H0.999878C0.723315 7.85714 0.499878 7.53795 0.499878 7.14286V5.71429C0.223315 5.71429 -0.00012207 5.39509 -0.00012207 5C-0.00012207 4.60491 0.223315 4.28571 0.499878 4.28571V2.85714C0.499878 2.46205 0.723315 2.14286 0.999878 2.14286H1.49988V0.714286ZM8.49988 0.714286V2.14286H8.99988C9.27644 2.14286 9.49988 2.46205 9.49988 2.85714V4.28571C9.77644 4.28571 9.99988 4.60491 9.99988 5C9.99988 5.39509 9.77644 5.71429 9.49988 5.71429V7.14286C9.49988 7.53795 9.27644 7.85714 8.99988 7.85714H8.49988V9.28571C8.49988 9.6808 8.27644 10 7.99988 10H7.49988C7.22332 10 6.99988 9.6808 6.99988 9.28571V5.71429V4.28571V0.714286C6.99988 0.319196 7.22332 0 7.49988 0H7.99988C8.27644 0 8.49988 0.319196 8.49988 0.714286ZM6.49988 4.28571V5.71429H3.49988V4.28571H6.49988Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_32_582">
                                                <rect width="10" height="10" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h4 
                                    class="text-minor-xxsm 
                                    text-black/80 
                                    tablet:text-minor-xsm 
                                    lg-tablet:text-major-sm
                                    lg-tablet:border-l-2
                                    lg-tablet:border-primary
                                    lg-tablet:pl-2">EXERCISES</h4>
                                </div>

                                <ol class="list-decimal ml-4 mb-3">
                                    <li v-for="(exercise, i) in weeks.exercise" :key="i" class="text-minor-xxsm font-medium text-black/90 tablet:text-minor-xsm tablet:font-medium lg-tablet:text-major-sm">{{exercise}}</li>
                                </ol>
                            </div>
                        </transition>
                            
                        
    


                        <!-- DISCUSSION -->
                        <div v-if="type === 'lg-tablet' || type === 'desktop'" class="lg-tablet:col-span-4 desktop:col-span-2 drop-shadow-none lg-tablet:flex lg-tablet:justify-center lg-tablet:items-center">
                            <div class="flex items-center">

                                <button type="button" class=" group" @click="prevWeek">

                                    <div class="w-12 h-12 desktop:w-6 desktop:h-6">
                                        <svg class="w-full h-full transition-transform duration-200 group-active:-scale-50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-black/40" d="M29.1834 6.45L26.2167 3.5L9.7334 20L26.2334 36.5L29.1834 33.55L15.6334 20L29.1834 6.45Z" />
                                        </svg>
                                    </div>

                                </button>

                                <div class="lg-tablet:w-16 lg-tablet:h-16 desktop:w-12 desktop:h-12 relative ">

                                    <svg class="w-full h-full" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="25.5" cy="26" rx="25.5" ry="26" fill="#307CF2"/>
                                    </svg>

                                    <div class="flex-col text-center justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                        <span class="lg-tablet:text-white lg-tablet:text-major-sm desktop:text-major-xsm lg-tablet:font-medium">Week</span><br>
                                        <span class="lg-tablet:text-white lg-tablet:text-major-sm desktop:text-major-xsm lg-tablet:font-semibold">{{ weeks.week }}</span>
                                    </div>
                                </div>

                                <div class="w-12 h-12 desktop:w-6 desktop:h-6">
                                    <button type="button" class="group" @click="nextWeek">
                                        <svg class="w-full h-full transition-transform duration-200 group-active:-scale-50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-black/40" d="M10.3833 33.7166L13.3333 36.6666L30 20L13.3333 3.33331L10.3833 6.28331L24.1 20L10.3833 33.7166Z" />
                                        </svg>
                                    </button>

                                </div>

                            </div>
                        </div>

    
                    <!-- </div> -->
                        <!-- ASSIGNENTS -->
                        <transition appear>
                            <div class="lg-tablet:bg-white lg-tablet:col-span-4 desktop:col-span-5 lg-tablet:p-4 lg-tablet:rounded-[10px] lg-tablet:relative">
                                <div class="flex items-baseline gap-x-1 mb-1 desktop:mb-2">
                                    <div class="w-2 h-2 tablet:w-3 tablet:h-3 lg-tablet:absolute lg-tablet:right-4">
                                        <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_32_596)">
                                                <path class="fill-black/60 lg-tablet:fill-primary" d="M3.88877 8L1.66654 6L2.44988 5.295L3.88877 6.585L7.54988 3.29L8.33321 4M4.99988 1C5.14722 1 5.28853 1.05268 5.39271 1.14645C5.4969 1.24021 5.55543 1.36739 5.55543 1.5C5.55543 1.63261 5.4969 1.75979 5.39271 1.85355C5.28853 1.94732 5.14722 2 4.99988 2C4.85254 2 4.71123 1.94732 4.60704 1.85355C4.50285 1.75979 4.44432 1.63261 4.44432 1.5C4.44432 1.36739 4.50285 1.24021 4.60704 1.14645C4.71123 1.05268 4.85254 1 4.99988 1ZM8.88877 1H6.56654C6.33321 0.42 5.7221 0 4.99988 0C4.27766 0 3.66654 0.42 3.43321 1H1.11099C0.816304 1 0.533689 1.10536 0.325315 1.29289C0.116941 1.48043 -0.00012207 1.73478 -0.00012207 2V9C-0.00012207 9.26522 0.116941 9.51957 0.325315 9.70711C0.533689 9.89464 0.816304 10 1.11099 10H8.88877C9.18345 10 9.46607 9.89464 9.67444 9.70711C9.88282 9.51957 9.99988 9.26522 9.99988 9V2C9.99988 1.73478 9.88282 1.48043 9.67444 1.29289C9.46607 1.10536 9.18345 1 8.88877 1Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_32_596">
                                                <rect width="10" height="10" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h4 
                                    class="text-minor-xxsm 
                                    text-black/80 
                                    tablet:text-minor-xsm 
                                    lg-tablet:text-major-sm
                                    lg-tablet:border-l-2
                                    lg-tablet:border-primary
                                    lg-tablet:pl-2">ASSIGNMENTS</h4>
                                </div>

                                <ol class="list-decimal ml-4 mb-3">
                                    <li v-for="(assign, i) in weeks.assginments" :key="i" class="text-minor-xxsm font-medium text-black/90 tablet:text-minor-xsm tablet:font-medium lg-tablet:text-major-sm">{{ assign }}</li>
                                </ol>
                            </div>
                        </transition>

                    <!-- <div class="lg-tablet:flex lg-tablet:gap-x-8 lg-tablet:p-4 lg-tablet:mr-4 lg-tablet:mt-4 lg-tablet:w-3/4 lg-tablet:justify-around"> -->
                        <transition appear>
                            <div class="lg-tablet:bg-white lg-tablet:col-span-4 desktop:col-span-6 lg-tablet:p-4 lg-tablet:rounded-[10px] lg-tablet:relative">
                                <div class="flex items-baseline gap-x-1 mb-1 desktop:mb-2">
                                    <div class="w-2 h-2 tablet:w-3 tablet:h-3 lg-tablet:absolute lg-tablet:right-4">
                                        <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_31_277)">
                                                <path class="fill-black/60 lg-tablet:fill-primary" d="M3.33333 9.23077C3.48264 9.23077 3.61285 9.2488 3.72396 9.28486C3.83507 9.32091 3.93924 9.373 4.03646 9.44111C4.13368 9.50922 4.22569 9.59135 4.3125 9.6875C4.39931 9.78365 4.49306 9.88782 4.59375 10H0V0.769231H0.666667V9.23077H3.33333ZM3.33333 0C3.56597 0 3.79514 0.0320513 4.02083 0.0961538C4.24653 0.160256 4.46181 0.260417 4.66667 0.396635V9.02043C4.47917 8.84014 4.27083 8.70192 4.04167 8.60577C3.8125 8.50962 3.57639 8.46154 3.33333 8.46154H1.33333V0H3.33333ZM10 0.769231V10H5.40625C5.50347 9.88782 5.59549 9.78365 5.68229 9.6875C5.7691 9.59135 5.86111 9.51122 5.95833 9.44712C6.05556 9.38301 6.15972 9.33093 6.27083 9.29087C6.38194 9.2508 6.51389 9.23077 6.66667 9.23077H9.33333V0.769231H10ZM6.66667 8.46154C6.42361 8.46154 6.1875 8.50962 5.95833 8.60577C5.72917 8.70192 5.52083 8.84014 5.33333 9.02043V0.396635C5.53819 0.264423 5.75347 0.166266 5.97917 0.102163C6.20486 0.0380609 6.43403 0.00400641 6.66667 0H8.66667V8.46154H6.66667Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_31_277">
                                                <rect width="10" height="10" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h4 
                                    class="text-minor-xxsm 
                                    text-black/80 
                                    tablet:text-minor-xsm 
                                    lg-tablet:text-major-sm
                                    lg-tablet:pl-2
                                    lg-tablet:border-l-2
                                    lg-tablet:border-primary">READING</h4>
                                </div>

                                <ol class="list-decimal ml-4 mb-3">
                                    <li v-for="(reading, i) in weeks.readings" :key="i" class="text-minor-xxsm font-medium text-black/90 tablet:text-minor-xsm tablet:font-medium lg-tablet:text-major-sm">{{ reading }}</li>
                                </ol>
                            </div>
                        </transition>
                            
                        


                            


                    <!-- </div> -->
                        <transition appear>
                            <div class="lg-tablet:bg-white lg-tablet:col-span-4 desktop:col-span-5 lg-tablet:p-4 lg-tablet:rounded-[10px] lg-tablet:relative">
                                <div class="flex items-baseline gap-x-1 mb-1 desktop:mb-2">
                                    <div class="w-2 h-2 tablet:w-3 tablet:h-3 lg-tablet:absolute lg-tablet:right-4">
                                        <svg class="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-black/60 lg-tablet:fill-primary" d="M3.47209 5.55554C3.47209 6.16942 2.97487 6.66665 2.36099 6.66665C1.7471 6.66665 1.24988 6.16942 1.24988 5.55554C1.24988 4.94165 1.7471 4.44443 2.36099 4.44443C2.97487 4.44443 3.47209 4.94165 3.47209 5.55554Z"/>
                                            <path class="fill-black/60 lg-tablet:fill-primary" d="M-0.00012207 8.48473C-0.00012207 7.64528 1.57293 7.22223 2.36098 7.22223C3.14904 7.22223 4.72209 7.64528 4.72209 8.48473V10H-0.00012207V8.48473Z" />
                                            <path class="fill-black/60 lg-tablet:fill-primary" d="M8.7498 5.55554C8.7498 6.16942 8.25258 6.66665 7.6387 6.66665C7.02481 6.66665 6.52759 6.16942 6.52759 5.55554C6.52759 4.94165 7.02481 4.44443 7.6387 4.44443C8.25258 4.44443 8.7498 4.94165 8.7498 5.55554Z" />
                                            <path class="fill-black/60 lg-tablet:fill-primary" d="M6.11101 4.99999C6.11101 5.61388 5.61379 6.1111 4.9999 6.1111C4.38601 6.1111 3.88879 5.61388 3.88879 4.99999C3.88879 4.38611 4.38601 3.88889 4.9999 3.88889C5.61379 3.88889 6.11101 4.38611 6.11101 4.99999Z"/>
                                            <path class="fill-black/60 lg-tablet:fill-primary" d="M4.7221 1.89805C4.7221 1.542 4.58066 1.20053 4.32889 0.948763C4.07712 0.696996 3.73566 0.555555 3.3796 0.555555H2.49933C2.13509 0.554969 1.78521 0.697549 1.52512 0.952554C1.26504 1.20756 1.11559 1.55456 1.10899 1.91874C1.1024 2.28292 1.23918 2.63511 1.48986 2.89937C1.74054 3.16362 2.08503 3.31878 2.44905 3.33138L2.49988 3.33333V3.88888C2.49988 3.88888 4.7221 3.56472 4.7221 1.89805ZM5.55543 1.45444C5.55543 1.0687 5.70867 0.698757 5.98143 0.425996C6.25419 0.153235 6.62413 0 7.00987 0H8.61098C8.97933 0 9.3326 0.146329 9.59307 0.406796C9.85353 0.667262 9.99986 1.02053 9.99986 1.38889C9.99986 1.75724 9.85353 2.11051 9.59307 2.37098C9.3326 2.63144 8.97933 2.77777 8.61098 2.77777H8.05542V3.61111C8.05542 3.61111 5.55543 3.25999 5.55543 1.45444ZM5.27765 8.48471C5.27765 7.64527 6.8507 7.22221 7.63876 7.22221C8.42681 7.22221 9.99986 7.64527 9.99986 8.48471V9.99998H5.27765V8.48471Z"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99983 7.92915C4.99983 7.6811 5.14538 7.46916 5.37205 7.29388C5.38504 7.28395 5.39819 7.27423 5.41149 7.26471C5.60482 7.12416 5.85038 7.00832 6.11232 6.91749C5.85215 6.79482 5.57365 6.71553 5.28788 6.68277C5.09654 6.66129 4.90339 6.66129 4.71205 6.68277C4.4262 6.71541 4.14761 6.79461 3.88733 6.91721C4.14927 7.00832 4.39483 7.12416 4.58844 7.26443C4.60177 7.27416 4.61455 7.28388 4.62733 7.29388C4.85427 7.46888 4.99983 7.6811 4.99983 7.92915Z"/>
                                        </svg>
                                    </div>

                                    <h4 
                                    class="text-minor-xxsm 
                                    text-black/80 
                                    tablet:text-minor-xsm 
                                    lg-tablet:text-major-sm
                                    lg-tablet:pl-2
                                    lg-tablet:border-l-2
                                    lg-tablet:border-primary">DISCUSSION</h4>
                                </div>

                                <ol class="list-decimal ml-4 mb-3">
                                    <li v-for="(discussion, i) in weeks.discussion" :key="i" class="text-minor-xxsm font-medium text-black/90 tablet:text-minor-xsm tablet:font-medium lg-tablet:text-major-sm">{{ discussion }}</li>
                                </ol>
                            </div>
                        </transition>
                            

                    <!-- READING -->

                    </div>
                    <div v-if="type !== 'lg-tablet' && type !== 'desktop'" class="absolute top-[-16px] right-[-16px]">
                        <div class="relative">
                            <div class="h-12 w-12 tablet:w-14 tablet:h-14">
                                <svg class="w-full h-full" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="25.5" cy="26" rx="25.5" ry="26" fill="#307CF2"/>
                                </svg>
                            </div>
                            <h3 class="text-minor-xxsm fonr-bold text-white absolute top-[50%] -translate-y-[50%] left-0 right-0 text-center tablet:text-minor-xsm tablet:font-semibold lg-tablet:text-base">WEEK<br>{{ weeks.week }}</h3>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    </transition>

</template>

<script setup>
import { useCourseDetailsStore } from '../../store/courseDetailsStore';
import { useBreakPoints } from '../../composible/useBreakPoints';
import { onMounted, ref, watch } from 'vue';
const courseStore = useCourseDetailsStore();
const currentWeek = ref(0);
const {type} = useBreakPoints();

onMounted(() => {
    console.log("On mount");
})

const nextWeek = () => {
    if (currentWeek.value < courseStore.currentSyllabus[0].syllabus.length - 1) {
        currentWeek.value += 1;
    }
}

const prevWeek = () => {
    if(currentWeek.value > 0) {
        currentWeek.value -= 1;
    }
}

watch(courseStore.currentCourse, () => {
    currentWeek.value = 0;
    console.log('Course ID changed');
})

</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
    opacity: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>