<template>
    <div class="max-h-screen bg-white overflow-y-hidden">
        <div class="w-[248px] h-full flex flex-col">  
                <div class="flex items-center justify-center mb-4 mx-4 bg-white py-4 desktop:border-b desktop:border-b-black/20">
                    <div class="flex items-center justify-center gap-x-4 desktop:gap-x-2 desktop:items-end">
                        <div class="desktop:w-12 desktop:h-12">
                            <img src="../../assets/images/logo.png" class="w-full h-full" alt="">
                        </div>
                        <h3 class="font-semibold desktop:text-major-sm">Cherry Language School</h3>
                    </div>
                </div>
            
            <button @click="router.push({name : 'Myclasses'}); dropClass()" type="button" :class="[currentTag === 'Myclasses' ? 'bg-primary hover:bg-primary/80' : 'bg-white hover:bg-primary/20']" class="h-[24px] transition-colors flex items-center gap-x-2 py-4 px-4 flex-none  rounded-r-[20px]">
                
                <div class="h-4 w-4">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[currentTag === 'Myclasses' ? 'fill-white' : 'fill-black/40']" d="M0.774194 0.5H23.2258C23.2465 0.5 23.3037 0.510035 23.3729 0.60258C23.4423 0.69524 23.5 0.846291 23.5 1.03448V22.9655C23.5 23.1537 23.4423 23.3048 23.3729 23.3974C23.3037 23.49 23.2465 23.5 23.2258 23.5H0.774194C0.753534 23.5 0.696325 23.49 0.627066 23.3974C0.55772 23.3048 0.5 23.1537 0.5 22.9655V1.03448C0.5 0.846291 0.55772 0.69524 0.627066 0.60258C0.696325 0.510035 0.753534 0.5 0.774194 0.5Z" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path :class="[currentTag === 'Myclasses' ? 'fill-primary' : 'fill-white']"  d="M15.7867 18.2733H20.2V19.7333H15.7867V18.2733ZM13.2267 8.6666C13.0657 8.50534 12.8745 8.3774 12.664 8.29012C12.4535 8.20283 12.2279 8.1579 12 8.1579C11.7721 8.1579 11.5465 8.20283 11.336 8.29012C11.1255 8.3774 10.9343 8.50534 10.7733 8.6666C10.572 8.86892 10.4235 9.11766 10.341 9.39091C10.2585 9.66415 10.2445 9.95349 10.3001 10.2334C10.3558 10.5134 10.4795 10.7753 10.6604 10.9962C10.8412 11.217 11.0735 11.39 11.337 11.4999C11.6004 11.6097 11.8868 11.6531 12.171 11.6262C12.4551 11.5992 12.7283 11.5028 12.9664 11.3454C13.2045 11.1879 13.4002 10.9744 13.5363 10.7235C13.6723 10.4725 13.7446 10.192 13.7467 9.9066C13.7475 9.67438 13.7006 9.44447 13.6089 9.23116C13.5171 9.01784 13.3825 8.82567 13.2133 8.6666H13.2267ZM10.6667 13.0199H13.3333C13.8638 13.0199 14.3725 13.2306 14.7475 13.6057C15.1226 13.9808 15.3333 14.4895 15.3333 15.0199V15.8266H8.66666V15.0199C8.66666 14.4895 8.87737 13.9808 9.25245 13.6057C9.62752 13.2306 10.1362 13.0199 10.6667 13.0199ZM7.61333 10.3133C7.48938 10.1883 7.34191 10.0891 7.17943 10.0214C7.01695 9.95372 6.84268 9.91886 6.66666 9.91886C6.49064 9.91886 6.31637 9.95372 6.15389 10.0214C5.99141 10.0891 5.84394 10.1883 5.71999 10.3133C5.56642 10.4682 5.45319 10.6584 5.39023 10.8672C5.32728 11.0761 5.31653 11.2972 5.35892 11.5111C5.40131 11.7251 5.49554 11.9254 5.63337 12.0945C5.77119 12.2636 5.94838 12.3962 6.14942 12.4809C6.35045 12.5655 6.56919 12.5996 6.78644 12.58C7.00368 12.5604 7.21282 12.4879 7.39549 12.3686C7.57816 12.2494 7.7288 12.0872 7.8342 11.8963C7.93959 11.7053 7.99652 11.4914 7.99999 11.2733C8.00015 11.0957 7.96484 10.92 7.89615 10.7562C7.82747 10.5925 7.72678 10.4442 7.59999 10.3199L7.61333 10.3133Z"/>
                        <path :class="[currentTag === 'Myclasses' ? 'fill-primary' : 'fill-white']" d="M8.89456 14.0943C8.77006 13.9582 8.61869 13.8495 8.45 13.7749C8.28132 13.7003 8.099 13.6615 7.91456 13.661H5.42122C5.0676 13.661 4.72846 13.8015 4.47841 14.0515C4.22837 14.3016 4.08789 14.6407 4.08789 14.9943V15.8277H8.66789M18.2812 10.3143C18.1573 10.1893 18.0098 10.0902 17.8473 10.0225C17.6848 9.95477 17.5106 9.91992 17.3346 9.91992C17.1585 9.91992 16.9843 9.95477 16.8218 10.0225C16.6593 10.0902 16.5118 10.1893 16.3879 10.3143C16.2343 10.4692 16.1211 10.6594 16.0581 10.8683C15.9952 11.0771 15.9844 11.2982 16.0268 11.5122C16.0692 11.7262 16.1634 11.9265 16.3013 12.0955C16.4391 12.2646 16.6163 12.3973 16.8173 12.4819C17.0183 12.5666 17.2371 12.6006 17.4543 12.581C17.6716 12.5615 17.8807 12.4889 18.0634 12.3697C18.2461 12.2505 18.3967 12.0883 18.5021 11.8973C18.6075 11.7063 18.6644 11.4924 18.6679 11.2743C18.668 11.0968 18.6327 10.921 18.564 10.7573C18.4954 10.5936 18.3947 10.4453 18.2679 10.321L18.2812 10.3143ZM15.3346 15.8277H19.9079V14.9943C19.9079 14.6407 19.7674 14.3016 19.5174 14.0515C19.2673 13.8015 18.9282 13.661 18.5746 13.661H16.0879C15.9035 13.6615 15.7211 13.7003 15.5524 13.7749C15.3838 13.8495 15.2324 13.9582 15.1079 14.0943"/>
                    </svg>
                </div>

                <span :class="[currentTag === 'Myclasses' ? 'text-white hover:text-black' : 'text-black']" class="text-major-sm">Myclass</span>

                <div class="h-4 w-4 ml-auto">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-black" d="M4.94 5.72668L8 8.78002L11.06 5.72668L12 6.66668L8 10.6667L4 6.66668L4.94 5.72668Z"/>
                    </svg>
                </div>
            </button>

            <ul :class="[(dropClassesToggle && currentTag === 'Myclasses') ? 'max-h-[300px] mb-2 mt-2' : 'max-h-0 mb-0 mt-0']" class="overflow-hidden transition-[max-height] duration-150 ease-in-out ml-4 space-y-2">
                <li v-for="(courseTitle, i) in courseStore.courseTitles" :key="i" class="transition-colors hover:bg-black/20 text-white py-2 px-2 group rounded-r-[10.68335px]">
                    <button @click="courseStore.myClass = courseTitle" class="flex items-center w-full">
                        <span class="line-clamp-1  text-major-xsm font-semibold text-black/60 text-left">{{ courseTitle }}</span>
                    </button>
                </li>
            </ul>

            <button @click="courseTag" type="button" :class="[currentTag === 'Courses' ? 'bg-primary hover:bg-primary/80' : 'bg-white hover:bg-primary/20']" class="h-[24px] transition-colors flex items-center gap-x-2 py-4 px-4 flex-none rounded-r-[20px]">
                
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="[currentTag === 'Courses' ? 'fill-white' : 'fill-black/40']" d="M24 2.25V15.75C24 16.9922 22.9922 18 21.75 18H19.5V8.25C19.5 6.18281 17.8172 4.5 15.75 4.5H6V2.25C6 1.00781 7.00781 0 8.25 0H21.75C22.9922 0 24 1.00781 24 2.25ZM18 8.25V21.75C18 22.9922 16.9922 24 15.75 24H2.25C1.00781 24 0 22.9922 0 21.75V8.25C0 7.00781 1.00781 6 2.25 6H15.75C16.9922 6 18 7.00781 18 8.25ZM14.8125 9.5625C14.8125 9.25313 14.5594 9 14.25 9H3.5625C3.25313 9 3 9.25313 3 9.5625V12H14.8125V9.5625Z"/>
                </svg>

                <span :class="[currentTag === 'Courses' ? 'text-white' : 'text-black']" class="text-major-sm">Courses</span>
            
            </button>

            <button @click="router.push({name : 'Library'})" type="button" :class="[currentTag === 'Library' ? 'bg-primary hover:bg-primary/80' : 'bg-white hover:bg-primary/20']" class="h-[24px] transition-colors flex items-center gap-x-2 py-4 px-4 flex-none rounded-r-[20px]">
                <svg class="w-4 h-4" :class="[currentTag === 'Library' ? 'fill-white' : 'fill-black/40']" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="[currentTag === 'Library' ? 'stroke-primary' : 'stroke-white']" d="M3.81267 9.40779C3.52172 12.0683 3.34836 14.7453 3.2933 17.4277C6.33846 18.9472 9.25413 20.8132 12 23C14.7462 20.8131 17.6622 18.9471 20.7078 17.4277C20.6527 14.7453 20.4793 12.0683 20.1884 9.40779M20.1884 9.40779C21.114 9.0363 22.0522 8.69261 23 8.37924C19.548 5.48851 15.863 3.01651 12 1C8.13693 3.01693 4.452 5.48935 1 8.38051C1.94491 8.6921 2.88247 9.03465 3.81162 9.40779C6.6345 10.5414 9.37343 11.9539 12 13.6306C14.6262 11.954 17.3659 10.5415 20.1884 9.40779ZM6.44658 15.5399C6.65699 15.5399 6.85878 15.44 7.00756 15.2623C7.15634 15.0846 7.23993 14.8436 7.23993 14.5922C7.23993 14.3409 7.15634 14.0998 7.00756 13.9221C6.85878 13.7444 6.65699 13.6445 6.44658 13.6445C6.23617 13.6445 6.03438 13.7444 5.8856 13.9221C5.73682 14.0998 5.65324 14.3409 5.65324 14.5922C5.65324 14.8436 5.73682 15.0846 5.8856 15.2623C6.03438 15.44 6.23617 15.5399 6.44658 15.5399ZM6.44658 15.5399V10.8963C8.24138 9.56363 10.0952 8.34799 12 7.25467M4.58804 21.8489C5.17826 21.1456 5.64629 20.3099 5.96525 19.3898C6.2842 18.4697 6.44778 17.4834 6.44658 16.4876V14.5922" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span :class="[currentTag === 'Library' ? 'text-white' : 'text-black']" class="text-major-sm">Library</span>
            </button>

            <button @click="router.push({name : 'Progress'})" type="button" :class="[currentTag === 'Progress' ? 'bg-primary hover:bg-primary/80' : 'bg-white hover:bg-primary/20']" class="h-[24px] transition-colors flex items-center gap-x-2 py-4 px-4 rounded-r-[20px]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="[currentTag === 'Progress' ? 'fill-white' : 'fill-black/40']" fill-rule="evenodd" clip-rule="evenodd" d="M7.50195 6H14.63C15.5242 6.00132 16.3814 6.35749 17.0132 6.99028C17.6451 7.62307 18 8.48076 18 9.375V18.75C18.7956 18.75 19.5587 18.4339 20.1213 17.8713C20.6839 17.3087 21 16.5456 21 15.75V6.108C21 4.603 19.875 3.297 18.336 3.168C18.1117 3.14979 17.8874 3.13312 17.663 3.118C17.4098 2.63029 17.0276 2.22147 16.558 1.93614C16.0884 1.65082 15.5494 1.49995 15 1.5H13.5C12.9505 1.49995 12.4115 1.65082 11.9419 1.93614C11.4723 2.22147 11.0901 2.63029 10.837 3.118C10.612 3.133 10.387 3.15 10.164 3.168C8.66195 3.295 7.55395 4.542 7.50195 6ZM13.5 3C13.1021 3 12.7206 3.15804 12.4393 3.43934C12.158 3.72064 12 4.10218 12 4.5H16.5C16.5 4.10218 16.3419 3.72064 16.0606 3.43934C15.7793 3.15804 15.3978 3 15 3H13.5Z"/>
                    <path :class="[currentTag === 'Progress' ? 'fill-white' : 'fill-black/40']" fill-rule="evenodd" clip-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5H14.625C15.661 7.5 16.5 8.34 16.5 9.375V20.625C16.5 21.66 15.66 22.5 14.625 22.5H4.875C4.37772 22.5 3.90081 22.3025 3.54917 21.9508C3.19754 21.5992 3 21.1223 3 20.625V9.375ZM6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697C6.36032 11.329 6.55109 11.25 6.75 11.25H6.758C6.95691 11.25 7.14768 11.329 7.28833 11.4697C7.42898 11.6103 7.508 11.8011 7.508 12V12.008C7.508 12.2069 7.42898 12.3977 7.28833 12.5383C7.14768 12.679 6.95691 12.758 6.758 12.758H6.75C6.55109 12.758 6.36032 12.679 6.21967 12.5383C6.07902 12.3977 6 12.2069 6 12.008V12ZM8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H12.75C12.9489 11.25 13.1397 11.329 13.2803 11.4697C13.421 11.6103 13.5 11.8011 13.5 12C13.5 12.1989 13.421 12.3897 13.2803 12.5303C13.1397 12.671 12.9489 12.75 12.75 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12ZM6 15C6 14.8011 6.07902 14.6103 6.21967 14.4697C6.36032 14.329 6.55109 14.25 6.75 14.25H6.758C6.95691 14.25 7.14768 14.329 7.28833 14.4697C7.42898 14.6103 7.508 14.8011 7.508 15V15.008C7.508 15.2069 7.42898 15.3977 7.28833 15.5383C7.14768 15.679 6.95691 15.758 6.758 15.758H6.75C6.55109 15.758 6.36032 15.679 6.21967 15.5383C6.07902 15.3977 6 15.2069 6 15.008V15ZM8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H12.75C12.9489 14.25 13.1397 14.329 13.2803 14.4697C13.421 14.6103 13.5 14.8011 13.5 15C13.5 15.1989 13.421 15.3897 13.2803 15.5303C13.1397 15.671 12.9489 15.75 12.75 15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15ZM6 18C6 17.8011 6.07902 17.6103 6.21967 17.4697C6.36032 17.329 6.55109 17.25 6.75 17.25H6.758C6.95691 17.25 7.14768 17.329 7.28833 17.4697C7.42898 17.6103 7.508 17.8011 7.508 18V18.008C7.508 18.2069 7.42898 18.3977 7.28833 18.5383C7.14768 18.679 6.95691 18.758 6.758 18.758H6.75C6.55109 18.758 6.36032 18.679 6.21967 18.5383C6.07902 18.3977 6 18.2069 6 18.008V18ZM8.25 18C8.25 17.8011 8.32902 17.6103 8.46967 17.4697C8.61032 17.329 8.80109 17.25 9 17.25H12.75C12.9489 17.25 13.1397 17.329 13.2803 17.4697C13.421 17.6103 13.5 17.8011 13.5 18C13.5 18.1989 13.421 18.3897 13.2803 18.5303C13.1397 18.671 12.9489 18.75 12.75 18.75H9C8.80109 18.75 8.61032 18.671 8.46967 18.5303C8.32902 18.3897 8.25 18.1989 8.25 18Z"/>
                </svg>

                <span :class="[currentTag === 'Progress' ? 'text-white' : 'text-black']" class="text-major-sm">Progress</span>
            </button>   

            <button @click="router.push({name : 'Profile'})" type="button" class="mt-auto transition-colors flex items-center gap-x-2 py-4 px-4 bg-black hover:bg-black/90 active:bg-[#666565] group">
                <svg  class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M12 2.4C10.3209 2.39969 8.67111 2.83978 7.21526 3.67635C5.75942 4.51292 4.54845 5.7167 3.70323 7.16754C2.85801 8.61838 2.4081 10.2655 2.39841 11.9446C2.38872 13.6237 2.81959 15.2759 3.64801 16.7364C4.20794 16.0087 4.92772 15.4195 5.75171 15.0144C6.5757 14.6092 7.48181 14.399 8.4 14.4H15.6C16.5182 14.399 17.4243 14.6092 18.2483 15.0144C19.0723 15.4195 19.7921 16.0087 20.352 16.7364C21.1804 15.2759 21.6113 13.6237 21.6016 11.9446C21.5919 10.2655 21.142 8.61838 20.2968 7.16754C19.4516 5.7167 18.2406 4.51292 16.7847 3.67635C15.3289 2.83978 13.6791 2.39969 12 2.4ZM21.5316 19.2912C23.136 17.1995 24.0039 14.6361 24 12C24 5.3724 18.6276 0 12 0C5.37241 0 1.35039e-05 5.3724 1.35039e-05 12C-0.00394822 14.6361 0.863899 17.1996 2.46841 19.2912L2.46241 19.3128L2.88841 19.8084C4.01387 21.1242 5.41127 22.1803 6.98428 22.9039C8.5573 23.6276 10.2685 24.0015 12 24C14.4328 24.0045 16.8089 23.2655 18.81 21.882C19.6631 21.2926 20.4367 20.5956 21.1116 19.8084L21.5376 19.3128L21.5316 19.2912ZM12 4.8C11.0452 4.8 10.1295 5.17928 9.45442 5.85441C8.77929 6.52954 8.4 7.44521 8.4 8.39999C8.4 9.35477 8.77929 10.2704 9.45442 10.9456C10.1295 11.6207 11.0452 12 12 12C12.9548 12 13.8705 11.6207 14.5456 10.9456C15.2207 10.2704 15.6 9.35477 15.6 8.39999C15.6 7.44521 15.2207 6.52954 14.5456 5.85441C13.8705 5.17928 12.9548 4.8 12 4.8Z"/>
                </svg>

                <span :class="[currentTag === 'Profile' ? 'text-primary' : 'text-black']" class="text-major-sm font-medium text-white">Mg Thaung</span>
            </button>   
        </div>
        <div :class="[slide ? 'w-[248px]' : 'w-0']" class="h-full overflow-x-hidden bg-[#FAFAFA] transition-[width]">
            <h1 class="mb-4 mt-8 ml-4 flex justify-start items-center">
                <span class="text-major-sm font-bold ">Courses</span>

                <div @click="courseTag" class="h-6 w-6 ml-auto group">
                    <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-black group-hover:fill-black/40" d="M10.2734 4.94L7.2201 8L10.2734 11.06L9.33344 12L5.33344 8L9.33344 4L10.2734 4.94Z"/>
                    </svg>
                </div>
            </h1>

            <div class="flex gap-y-4 flex-col px-4">
                <div @click="selectCourse(course.id)" v-for="course in courseStore.course" :key="course.id" class="w-[216px] h-[72px] bg-white p-2 rounded-[10px] drop-shadow-drop-sha hover:drop-shadow-drop-sha-hor cursor-pointer">
                    <div class="flex gap-x-2 justify-center items-center h-full" >
                        <div class="w-12 h-12 flex-none">
                            <svg class="w-full h-full" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#4585E5" d="M16 0.96579C18.1012 0.96579 20.1817 1.37964 22.1229 2.18372C24.0641 2.98779 25.828 4.16634 27.3137 5.65208C28.7994 7.13782 29.978 8.90165 30.7821 10.8429C31.5861 12.7841 32 14.8646 32 16.9658C32 21.2093 30.3143 25.2789 27.3137 28.2795C24.3131 31.2801 20.2435 32.9658 16 32.9658C13.8989 32.9658 11.8183 32.5519 9.87706 31.7479C7.93586 30.9438 6.17203 29.7652 4.68629 28.2795C1.68571 25.2789 0 21.2093 0 16.9658C0 12.7223 1.68571 8.65266 4.68629 5.65208C7.68687 2.6515 11.7565 0.96579 16 0.96579ZM19.2 8.96579H12.8V12.1658H14.4V21.7658H12.8V24.9658H19.2V21.7658H17.6V12.1658H19.2V8.96579Z" />
                            </svg>
                        </div>
                        <div class="h-full">
                            <h3 class="line-clamp-1 text-major-xsm font-semibold text-black/80">{{ course.title }}</h3>
                            <p class="line-clamp-2 leading-[12.288px] indent-2 text-major-xxsm font-medium mt-1 text-black/70">
                                {{ course.descri }}
                            </p>
                            <div class="flex justify-start mt-1 gap-x-1 items-center">
                                <div class="h-2 w-2">
                                    <svg class="w-full h-full" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_217_372)">
                                            <path fill="#4585E5" d="M0 2.73852H1.66667V5.46579H0V2.73852ZM3.33333 0.46579H5V5.46579H3.33333V0.46579Z" fill-opacity="0.7"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_217_372">
                                                <rect width="5" height="5" fill="white" transform="translate(0 0.46579)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span class="text-primary text-major-xxsm">{{ course.level }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useCourseDetailsStore } from '../../store/courseDetailsStore';

const courseStore = useCourseDetailsStore();
const currentTag = ref();
const slide = ref(false);
const route = useRoute();
const router = useRouter();
const dropClassesToggle = ref(false);
watch(() => route.name, (newval) => {
    currentTag.value = newval;
    if(newval !== 'Courses') {
        slide.value = false;
    }

    if(newval !== 'Myclasses') {
        dropClassesToggle.value = false;
    }
})

function courseTag() {
    if(route.name !== 'Courses') {
        router.push({
            name : 'Courses'
        });
    }
    slide.value = !slide.value;
}

function dropClass () {
    dropClassesToggle.value = !dropClassesToggle.value;
}

function selectCourse(id) {
    courseStore.currentCourseID = id;
}
</script>

<style>
</style>