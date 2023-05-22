
const handleRipple = (element, binding, ev) => {
    const rippleElement = document.createElement('span');
    
    
    
    let currentDiameter = 1;
    let currentOpacity = 0.65
    
    let animationHandler = setInterval(() => {
        animateRippleSpread();
    }, 10);
    applyRippleStyle();

    function applyRippleStyle() {
    
        const elementCoordinates = element.getBoundingClientRect();
        const offsetY = ev.clientY - elementCoordinates.y;
        const offsetX = ev.clientX - elementCoordinates.x;
        
        rippleElement.style.position = "absolute";
        rippleElement.style.height = "5px";
        rippleElement.style.width = "5px";
        rippleElement.style.borderRadius = "100%";
        rippleElement.style.backgroundColor = binding.value;
        rippleElement.style.left = `${offsetX}px`;
        rippleElement.style.top = `${offsetY}px`;
        ev.target.appendChild(rippleElement);
    
    }

    function animateRippleSpread() {
        const maximalDiameter = +binding.value || 50;
        
        if(currentDiameter <= maximalDiameter) {
            
            currentDiameter += 3;
            currentOpacity -= 0.65/maximalDiameter;
            
            rippleElement.style.transform = `scale(${currentDiameter})`;
            rippleElement.style.opacity = `${currentOpacity}`;
    
        } else {
            console.log("interval cleared");
            rippleElement.remove();
            clearInterval(animationHandler);
        }
    }
    
}

const vRipple = {
    mounted : (el, binding) => {
        el.style.position = "relative";
        
        el.addEventListener('click', (ev) => {
            handleRipple(el, binding, ev);
        })  
    },
    unmounted : (el, binding) => {
        
        el.removeEventListener('click', handleRipple)
    },
}




export default vRipple;