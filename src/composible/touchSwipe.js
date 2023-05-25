import {   onMounted, onUnmounted, ref } from "vue";
import { useBreakPoints } from './useBreakPoints';


export const useTouchSwipe = (target, total, Ids, page) => {
    const initialX = ref(0);
    const initialY = ref(0);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const direction = ref();
    const inner = target;
    const isswipe = ref(false);
    const currentCourse = ref(0);
    const currentCorID = ref(Ids[currentCourse.value]);
    const {type , width } = useBreakPoints();
    const counter = ref(0);
    const childWidth = ref();
    let marginArr = [];


    let rectLeft;
    let rectTop;

    const handleTouchStart = (e) => {
        isswipe.value = true;
        getXY(e);
        initialX.value = mouseX.value;
        initialY.value = mouseY.value;

    };

    const handleTouchMove = (e) => {
        if(isswipe.value) {
            getXY(e);
            let diffX = mouseX.value - initialX.value;
            if(diffX > 0) {
                direction.value = 'left'
               
            } else if (diffX < 0) {
                direction.value = 'right';
                
            }
        }
    }

    // eslint-disable-next-line no-unused-vars
    const handleTouchEnd = (e) => {
        if(direction.value === 'right') {
            
            if(currentCourse.value < Ids.length - 1) {
                currentCourse.value += 1;
                next();
                currentCorID.value = Ids[currentCourse.value];
                // console.log('currentCourse:', currentCourse.value);
                // console.log('ID: ', Ids[currentCourse.value]);
            }

            // console.log(currentCourse.value);;
        } else if (direction.value === 'left') {

            if(currentCourse.value > 0) {
                currentCourse.value -= 1;
                previous();
                // console.log('currentCourse:', currentCourse.value);
                // console.log('ID:', Ids[currentCourse.value]);
                currentCorID.value = Ids[currentCourse.value];
            }

            // console.log(currentCourse.valwue);
        }
        isswipe.value = false;
    }
    
    onMounted(() => {
        childWidth.value = inner.value.children[0].clientWidth;
        inner.value.scrollLeft = 0;
        if(page === 'courses') {
            marginArr = [16, 32];
        } else if (page === 'classes') {
            marginArr = [0, 0];
        }
        rectLeft = inner.value.getBoundingClientRect().left;
        rectTop = inner.value.getBoundingClientRect().top;
        counter.value = 0;

        inner.value.addEventListener('touchstart', handleTouchStart);
        inner.value.addEventListener('touchmove', handleTouchMove);
        inner.value.addEventListener('touchend', handleTouchEnd)
    });

    onUnmounted(() => {
        const element = inner.value;
        if(element) {
            inner.value.removeEventListener('touchstart', handleTouchStart);
            inner.value.removeEventListener('touchstart', handleTouchMove);
            inner.value.removeEventListener('touchstart', handleTouchEnd);
        }

    })
    
    


    const getXY = (e) => {
        mouseX.value = e.touches[0].pageX - rectLeft;
        mouseY.value = e.touches[0].pageY - rectTop;
    }


    const next = () => {

        if(type.value === 'phone') {
            if (counter.value === 0) {
                inner.value.scrollLeft += childWidth.value + marginArr[0];
                counter.value += 1;
            } else {
                inner.value.scrollLeft += childWidth.value + marginArr[0] + (page === 'classes' ? 16 : 0);
                counter.value += 1;
            }
        } else if (type.value === 'tablet') {
            if (counter.value === 0) {
                console.log('tablet');
                inner.value.scrollLeft += childWidth.value + marginArr[1];
                counter.value += 1;
            } else {
                inner.value.scrollLeft += childWidth.value + marginArr[1] + 32;
                counter.value += 1;
            }
        } else if (type.value === 'lg-tablet') {
            if (counter.value) {
                inner.value.scrollLeft += childWidth.value + marginArr[1];
                counter.value += 1;
            } else {
                inner.value.scrollLeft += childWidth.value + marginArr[1] + (page === 'classes' ? 16 : 0);
                counter.value += 1;
            }

        }

    }

    const previous = () => {
        if(type.value === 'phone') {
            inner.value.scrollLeft -= childWidth.value + marginArr[0] + (page === 'classes' ? 16 : 0);
            counter.value -= 1;
        } else if (type.value === 'tablet') {
            inner.value.scrollLeft -= childWidth.value + marginArr[1] + 32;
            counter.value -= 1;
        } else if (type.value === 'lg-tablet') {
            inner.value.scrollLeft -= childWidth.value + marginArr[1] + (page === 'classes' ? 16 : 0);
            counter.value -= 1;
        }
    }


    return {currentCorID, counter};
}