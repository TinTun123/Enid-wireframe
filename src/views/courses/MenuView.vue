<template>
    <transition appear>
        <div class="pt-8 tablet:pt-8 desktop:pt-0">
            <div class="flex items-center gap-x-1 ml-4 tablet:mx-8 lg-tablet:mt-0 desktop:mt-12">
                <div class="w-4 h-4">
                    <svg class="w-full h-full" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="black" fill-opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M8.47139 2.02869C8.34637 1.90371 8.17683 1.8335 8.00005 1.8335C7.82328 1.8335 7.65374 1.90371 7.52872 2.02869L2.86205 6.69535L1.52872 8.02869C1.46505 8.09019 1.41426 8.16375 1.37932 8.24508C1.34438 8.32642 1.32599 8.4139 1.32522 8.50242C1.32445 8.59094 1.34132 8.67873 1.37484 8.76066C1.40836 8.84259 1.45786 8.91702 1.52046 8.97962C1.58305 9.04221 1.65749 9.09171 1.73942 9.12523C1.82135 9.15876 1.90914 9.17562 1.99765 9.17485C2.08617 9.17409 2.17365 9.15569 2.25499 9.12076C2.33633 9.08582 2.40989 9.03503 2.47139 8.97135L2.66672 8.77602V13.1667C2.66672 13.6971 2.87743 14.2058 3.25251 14.5809C3.62758 14.956 4.13629 15.1667 4.66672 15.1667H11.3334C11.8638 15.1667 12.3725 14.956 12.7476 14.5809C13.1227 14.2058 13.3334 13.6971 13.3334 13.1667V8.77602L13.5287 8.97135C13.6545 9.09279 13.8229 9.15999 13.9977 9.15847C14.1725 9.15695 14.3397 9.08684 14.4633 8.96323C14.5869 8.83963 14.657 8.67242 14.6585 8.49762C14.66 8.32282 14.5928 8.15442 14.4714 8.02869L8.47139 2.02869Z"/>
                    </svg>
                </div>
                <span class="text-black/40">\</span>
                <span class="text-black/40 text-minor-xsm font-semibold max-w-[100px] line-clamp-1 tablet:text-minor-sm tablet:max-w-none">{{ courseStore.getTitle(route.params.id).value.title }}</span>
                <span class="text-black/40">\</span>
            </div>

            <div class="mx-4 mt-8 grid grid-cols-2 gap-4 tablet:grid-cols-8 lg-tablet:grid-cols-12 tablet:mx-8 tablet:gap-8 lg-tablet:mt-16">

                <div class=" bg-white drop-shadow-drop-sha  py-4 rounded-[10px] col-span-1 active:drop-shadow-none tablet:col-start-2 tablet:col-end-5 tablet:py-8 lg-tablet:col-start-4 lg-tablet:col-end-7 desktop:col-start-1 desktop:col-end-6">
                    <div class="flex flex-col items-center justify-center gap-y-4">
                        <div class="w-16 h-16">
                            <svg class="w-full h-full" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="black" stroke-opacity="0.4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M62.9355 1H3.06452C1.92432 1 1 2.23508 1 3.75862V62.2414C1 63.7649 1.92432 65 3.06452 65H62.9355C64.0757 65 65 63.7649 65 62.2414V3.75862C65 2.23508 64.0757 1 62.9355 1Z" />
                                <path stroke="black" stroke-opacity="0.4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M43.0954 49.7287H54.8643V53.622H43.0954V49.7287ZM36.2688 24.1109C35.8395 23.6809 35.3296 23.3397 34.7683 23.107C34.207 22.8742 33.6053 22.7544 32.9977 22.7544C32.39 22.7544 31.7883 22.8742 31.227 23.107C30.6658 23.3397 30.1559 23.6809 29.7266 24.1109C29.1897 24.6504 28.7937 25.3138 28.5737 26.0424C28.3537 26.7711 28.3162 27.5426 28.4647 28.2892C28.6132 29.0357 28.9431 29.7342 29.4253 30.3231C29.9074 30.9121 30.5271 31.3734 31.2296 31.6663C31.9321 31.9593 32.6959 32.075 33.4536 32.0031C34.2114 31.9313 34.9398 31.6741 35.5747 31.2543C36.2096 30.8345 36.7315 30.265 37.0944 29.5959C37.4572 28.9268 37.6499 28.1787 37.6554 27.4176C37.6578 26.7984 37.5327 26.1853 37.2881 25.6164C37.0434 25.0476 36.6843 24.5351 36.2332 24.1109H36.2688ZM29.4421 35.7198H36.5532C37.9677 35.7198 39.3243 36.2817 40.3245 37.2819C41.3246 38.2821 41.8866 39.6387 41.8866 41.0531V43.2043H24.1088V41.0531C24.1088 39.6387 24.6707 38.2821 25.6709 37.2819C26.6711 36.2817 28.0276 35.7198 29.4421 35.7198ZM21.2999 28.502C20.9694 28.1688 20.5761 27.9043 20.1428 27.7238C19.7095 27.5432 19.2448 27.4503 18.7754 27.4503C18.3061 27.4503 17.8413 27.5432 17.4081 27.7238C16.9748 27.9043 16.5815 28.1688 16.251 28.502C15.8415 28.9151 15.5395 29.4223 15.3716 29.9793C15.2038 30.5362 15.1751 31.1258 15.2881 31.6964C15.4012 32.267 15.6525 32.8011 16.02 33.252C16.3875 33.7028 16.86 34.0566 17.3961 34.2823C17.9322 34.5081 18.5155 34.5988 19.0948 34.5466C19.6742 34.4945 20.2319 34.3009 20.719 33.9831C21.2061 33.6652 21.6078 33.2326 21.8889 32.7234C22.1699 32.2141 22.3217 31.6436 22.331 31.062C22.3314 30.5886 22.2373 30.1199 22.0541 29.6833C21.8709 29.2468 21.6024 28.8512 21.2643 28.5198L21.2999 28.502Z" />
                                <path stroke="black" stroke-opacity="0.4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M24.7154 38.5849C24.3834 38.222 23.9797 37.9319 23.5299 37.733C23.0801 37.5341 22.5939 37.4307 22.102 37.4293H15.4531C14.5101 37.4293 13.6058 37.8039 12.939 38.4707C12.2722 39.1375 11.8976 40.0419 11.8976 40.9849V43.2071H24.1109M41.8887 43.2071H54.0842V40.9849C54.0842 40.0419 53.7096 39.1375 53.0428 38.4707C52.376 37.8039 51.4717 37.4293 50.5287 37.4293H43.8976C43.4057 37.4307 42.9195 37.5341 42.4697 37.733C42.0199 37.9319 41.6162 38.222 41.2842 38.5849M49.7465 28.5049C49.4159 28.1716 49.0227 27.9071 48.5894 27.7266C48.1561 27.5461 47.6914 27.4531 47.222 27.4531C46.7526 27.4531 46.2879 27.5461 45.8546 27.7266C45.4214 27.9071 45.0281 28.1716 44.6976 28.5049C44.288 28.9179 43.9861 29.4251 43.8182 29.9821C43.6503 30.539 43.6217 31.1286 43.7347 31.6992C43.8477 32.2698 44.099 32.8039 44.4666 33.2548C44.8341 33.7056 45.3066 34.0594 45.8427 34.2852C46.3788 34.5109 46.9621 34.6016 47.5414 34.5494C48.1208 34.4973 48.6784 34.3038 49.1656 33.9859C49.6527 33.668 50.0544 33.2354 50.3355 32.7262C50.6165 32.2169 50.7683 31.6465 50.7776 31.0649C50.778 30.5914 50.6838 30.1227 50.5007 29.6862C50.3175 29.2496 50.049 28.854 49.7109 28.5226L49.7465 28.5049Z" />
                            </svg>
                        </div>

                        <div class="flex flex-col items-center">
                            <span 
                            class="text-minor-sm 
                            font-semibold 
                            text-black/60 
                            tablet:text-base 
                            tablet:font-semibold 
                            tablet:text-black/60
                            ">Lecture Room</span>
                            <span 
                            class="text-minor-xsm 
                            font-semibold 
                            text-black/40 
                            tablet:text-minor-sm">in 3 days</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white drop-shadow-drop-sha rounded-[10px] py-4 col-span-1 active:drop-shadow-none tablet:col-start-5 tablet:col-end-8 tablet:py-8 lg-tablet:col-start-8 lg-tablet:col-end-11 desktop:col-start-7 desktop:col-end-12">
                    <div class="flex flex-col items-center justify-center gap-y-4">
                        <div class="w-16 h-16">
                            <svg class="w-16 h-16" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.0371 19.4588C48.6929 18.8146 49.7444 18.7821 50.44 19.3615L50.5391 19.4588C51.2203 20.128 51.2203 21.2087 50.5391 21.8779L28.8273 43.2079C28.1367 43.8863 27.0074 43.8863 26.3168 43.2079L15.4609 32.5429C14.7797 31.8737 14.7797 30.793 15.4609 30.1238C16.1514 29.4454 17.2808 29.4454 17.9713 30.1238L17.9716 30.1241L26.9108 38.8978L27.5764 39.551L28.2419 38.8976L48.037 19.459L48.0371 19.4588Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <rect x="1.45" y="0.95" width="62.1" height="62.1" rx="4.05" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                            </svg>
                        </div>

                        <div class="flex flex-col items-center">
                            <span class="text-minor-sm font-semibold text-black/60 tablet:text-base tablet:font-semibold tablet:text-black/60">Assginments</span>
                            <span class="text-minor-xsm font-semibold text-black/40 tablet:text-minor-sm">+3 remain</span>
                        </div>
                    </div>
                </div>

                <div class=" bg-white drop-shadow-drop-sha py-4 rounded-[10px] col-span-1 active:drop-shadow-none tablet:col-start-2 tablet:col-end-5 tablet:py-8 lg-tablet:col-start-4 lg-tablet:col-end-7 desktop:col-start-1 desktop:col-end-6">
                    <div class="flex flex-col items-center justify-center gap-y-4">
                        <div class="w-16 h-16">

                            <svg class="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.2681 35.5564C21.2681 38.9606 18.5113 41.7175 15.1073 41.7175C11.7034 41.7175 8.94658 38.9606 8.94658 35.5564C8.94658 32.1522 11.7034 29.3953 15.1073 29.3953C18.5113 29.3953 21.2681 32.1522 21.2681 35.5564Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <path d="M0.950488 54.3026C0.950488 53.2846 1.42019 52.3375 2.31962 51.4498C3.22738 50.5538 4.52673 49.769 6.03858 49.1212C9.06654 47.8238 12.7168 47.1727 15.1109 47.1727C17.505 47.1727 21.1552 47.8238 24.1832 49.1212C25.695 49.769 26.9944 50.5538 27.9021 51.4498C28.8015 52.3375 29.2712 53.2846 29.2712 54.3026V63.0504H0.950488V54.3026Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <path d="M55.0464 35.5564C55.0464 38.9606 52.2897 41.7175 48.8857 41.7175C45.4817 41.7175 42.7249 38.9606 42.7249 35.5564C42.7249 32.1522 45.4817 29.3953 48.8857 29.3953C52.2897 29.3953 55.0464 32.1522 55.0464 35.5564Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <path d="M38.1578 31.9998C38.1578 35.404 35.401 38.1608 31.997 38.1608C28.593 38.1608 25.8362 35.404 25.8362 31.9998C25.8362 28.5955 28.593 25.8387 31.997 25.8387C35.401 25.8387 38.1578 28.5955 38.1578 31.9998Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <path d="M15.9968 4.50554H15.9983H21.6318C23.6585 4.50554 25.6021 5.31066 27.0352 6.7438C28.4683 8.17695 29.2734 10.1207 29.2734 12.1475C29.2734 16.9652 26.0901 19.896 22.6738 21.6756C20.9746 22.5607 19.2657 23.1315 17.9756 23.481C17.5917 23.585 17.2466 23.6689 16.9519 23.7354V21.3332V20.4189L16.0382 20.3839L15.7129 20.3715L15.7094 20.3714C13.6289 20.2993 11.66 19.4125 10.2273 17.9021C8.79453 16.3917 8.01272 14.3787 8.05042 12.2971C8.08813 10.2156 8.94232 8.23219 10.4288 6.77466C11.9153 5.31713 13.915 4.50219 15.9968 4.50554ZM51.5557 16.8277H50.6057V17.7777V21.9698C50.241 21.8928 49.7975 21.791 49.2956 21.6601C47.8373 21.2797 45.9047 20.6582 43.982 19.6938C40.1094 17.7514 36.5065 14.5517 36.5065 9.3084C36.5065 7.0916 37.3871 4.96561 38.9545 3.3981C40.5219 1.8306 42.6478 0.95 44.8645 0.95H55.1111C57.2165 0.95 59.2357 1.7864 60.7244 3.27522C62.2132 4.76404 63.0496 6.78332 63.0496 8.88885C63.0496 10.9944 62.2132 13.0137 60.7244 14.5025C59.2357 15.9913 57.2165 16.8277 55.1111 16.8277H51.5557ZM34.7288 54.302C34.7288 53.284 35.1985 52.3369 36.0979 51.4491C37.0057 50.5531 38.305 49.7683 39.8169 49.1206C42.8448 47.8232 46.4951 47.172 48.8892 47.172C51.2833 47.172 54.9335 47.8232 57.9615 49.1206C59.4733 49.7683 60.7727 50.5531 61.6804 51.4491C62.5799 52.3369 63.0496 53.284 63.0496 54.302V63.0497H34.7288V54.302Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <path d="M33.8007 45.9252L33.8007 45.9251L33.7961 45.9287C33.0944 46.4713 32.4707 47.0915 31.9952 47.7899C31.52 47.0917 30.8963 46.4719 30.1941 45.93C30.1063 45.8614 30.0167 45.7932 29.9221 45.7242L29.9198 45.7225C29.1829 45.1886 28.3476 44.7127 27.4569 44.2923C28.3706 44.0159 29.3088 43.8218 30.2604 43.7131C31.4138 43.5837 32.5781 43.5837 33.7315 43.7131C34.6824 43.8222 35.6199 44.0165 36.533 44.293C35.6435 44.7129 34.8093 45.1888 34.0738 45.7231C33.9818 45.7891 33.8907 45.8564 33.8007 45.9252Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                            </svg>

                        </div>

                        <div class="flex flex-col items-center">
                            <span class="text-minor-sm font-semibold text-black/60 tablet:text-base tablet:text-black/60 tablet:font-semibold">Discussions</span>
                            <span class="text-minor-xsm font-semibold text-black/40 tablet:text-minor-sm">+5 replied</span>
                        </div>
                    </div>
                </div>

                <div class=" bg-white drop-shadow-drop-sha rounded-[10px] py-4 col-span-1 active:drop-shadow-none tablet:col-start-5 tablet:col-end-8 tablet:py-8 lg-tablet:col-start-8 lg-tablet:col-end-11 desktop:col-start-7 desktop:col-end-12">
                    <div class="flex flex-col items-center justify-center gap-y-4">
                        <div class="w-16 h-16">
                            <svg class="w-full h-full" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.4852 29.0591C38.8148 29.2911 39.1464 29.5108 39.4862 29.7152C42.1106 31.3054 44.9161 31.9892 47.5873 32.0967C52.0835 32.278 56.0832 30.7631 57.7087 30.1454L58.1664 29.9764C59.1425 29.6288 59.8958 29.0026 60.2605 28.2355C60.6253 27.4685 60.5716 26.6234 60.1114 25.8862C59.6511 25.149 58.822 24.5801 57.8063 24.3047C56.7907 24.0292 55.6718 24.0697 54.6957 24.4173L54.0162 24.6632C52.2177 25.3193 50.2179 26.0476 48.0207 25.96C46.9526 25.9154 45.8011 25.6619 44.5784 24.9213C43.3069 24.15 41.7871 22.7472 40.3183 20.2012C39.1281 18.1392 37.3541 16.5412 34.8354 15.6332C32.4226 14.7635 29.8551 14.7266 27.5664 14.9325C21.4325 15.4826 16.7716 18.1684 13.602 20.6637C10.9918 22.7164 9.04481 24.9443 8.08862 26.0368C7.89535 26.2596 7.74276 26.4348 7.6329 26.5515C7.02994 27.2182 6.79862 28.0374 6.98893 28.8318C7.17924 29.6263 7.7759 30.3323 8.64992 30.7972C9.52394 31.2621 10.6051 31.4485 11.6597 31.3162C12.7142 31.1839 13.6575 30.7434 14.2855 30.0901C14.5134 29.8473 14.7636 29.5631 15.0423 29.245C16.0596 28.0896 17.4532 26.507 19.4734 24.9182C21.0643 23.666 22.8465 22.5828 24.8077 21.8714L23.3164 24.9782C21.8109 28.1218 20.1366 31.6466 19.866 32.3533C19.6854 32.8312 19.6465 33.3333 19.7521 33.8238C19.8151 34.1341 19.925 34.3969 20.0125 34.5813C20.1854 34.9469 20.4153 35.2942 20.6188 35.5738C21.0338 36.1516 21.6034 36.8169 22.2158 37.4914C23.4568 38.8604 25.1291 40.5429 26.7872 42.1716C28.252 43.6082 29.7432 45.0387 30.97 46.2156L31.4603 46.6873C32.1195 47.3188 32.6708 47.8489 33.0757 48.2469C33.2588 48.4251 33.3808 48.5511 33.4622 48.631C33.5415 48.8354 33.6412 49.1319 33.7613 49.5206C33.9993 50.2935 34.2719 51.2984 34.5608 52.4031C34.748 53.113 34.9412 53.8705 35.1304 54.6187C35.517 56.1291 35.8934 57.6041 36.1822 58.5906C36.2977 58.9846 36.5147 59.3577 36.821 59.6884C37.1273 60.0191 37.5169 60.301 37.9675 60.518C38.418 60.735 38.9208 60.8829 39.447 60.9532C39.9732 61.0235 40.5126 61.0148 41.0344 60.9276C41.5562 60.8404 42.0501 60.6765 42.488 60.4452C42.9259 60.2138 43.2992 59.9196 43.5865 59.5793C43.8738 59.239 44.0696 58.8593 44.1627 58.4619C44.2557 58.0645 44.2442 57.6571 44.1288 57.263C43.8643 56.3565 43.5245 55.0351 43.1563 53.5877C42.959 52.8164 42.7535 52.0098 42.546 51.2123C42.2812 50.1811 41.995 49.153 41.6874 48.1286C41.5648 47.7213 41.4277 47.3165 41.2765 46.9147C41.1748 46.6566 40.9673 46.1188 40.6133 45.6502C40.2847 45.2575 39.9274 44.879 39.5431 44.5163L39.5228 44.4978C39.0874 44.0691 38.5096 43.5145 37.8546 42.886L37.3602 42.4113C35.8167 40.9347 34.2854 39.451 32.7664 37.96L38.4852 29.0591ZM24.0956 47.6784L18.2873 41.5831L16.619 45.2077L6.49972 43.4115C5.44918 43.2251 4.34361 43.3615 3.42621 43.7907C2.50882 44.2199 1.85475 44.9067 1.6079 45.7001C1.36105 46.4935 1.54163 47.3285 2.10992 48.0214C2.67821 48.7142 3.58766 49.2082 4.6382 49.3946L18.3259 51.8238C19.3052 51.9974 20.3348 51.8909 21.2162 51.5249C22.0976 51.1589 22.7683 50.5592 23.0987 49.8418L24.0956 47.6784Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                                <ellipse cx="40.154" cy="7.91424" rx="9.15499" ry="6.91424" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                            </svg>
                        </div>

                        <div class="flex flex-col items-center">
                            <span class="text-minor-sm font-semibold text-black/60 tablet:text-base tablet:text-black/60 tablet:font-semibold">Exercise</span>
                            <span class="text-minor-xsm font-semibold text-black/40 tablet:text-minor-sm">+3 Question Set</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white drop-shadow-drop-sha rounded-[10px] py-4 col-span-1 active:drop-shadow-none tablet:col-start-2 tablet:col-end-5 tablet:py-8 lg-tablet:col-start-4 lg-tablet:col-end-7 desktop:col-start-1 desktop:col-end-6">
                    <div class="flex flex-col items-center bg-white justify-center gap-y-4">
                        <div class="w-16 h-16">
                            <svg class="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0909 16.95C22.5662 16.95 24.0178 17.0601 25.4464 17.28C26.636 17.4632 27.7764 17.7321 28.8682 18.086V46.5158C27.9483 46.1415 26.9711 45.8376 25.9379 45.6026C24.3665 45.2453 22.7503 45.0673 21.0909 45.0673H8.95V16.95H21.0909ZM42.9091 45.0673C41.2497 45.0673 39.6335 45.2453 38.0621 45.6026C37.0289 45.8376 36.0517 46.1415 35.1318 46.5158V18.0924C36.2237 17.7484 37.364 17.4845 38.5536 17.3014C39.9837 17.0812 41.4369 16.964 42.9136 16.95H55.05V45.0673H42.9091Z" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                                <rect x="0.95" y="0.95" width="62.1" height="62.1" rx="4.05" stroke="black" stroke-opacity="0.4" stroke-width="1.9"/>
                            </svg>
                        </div>

                        <div class="flex flex-col items-center">
                            <span class="text-minor-sm font-semibold text-black/60 mb-1 tablet:text-base tablet:text-black/60 tablet:font-semibold">Self Study</span>
                            <span class="text-minor-xsm font-semibold text-black/40 tablet:text-minor-sm">+5 Videos</span>
                            <span class="text-minor-xsm font-semibold text-black/40 tablet:text-minor-sm">+2 Readings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </transition>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCourseDetailsStore } from '../../store/courseDetailsStore';


const courseStore = useCourseDetailsStore();
const route = useRoute();


</script>

<style>
</style>