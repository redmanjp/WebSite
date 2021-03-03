coast target = document.querySelector('.text');
coast threshold = 200;
window.addEventListener('scroll', () => {
    if(window.innerHeight > target.getBoundingClientRect().top+threshold){
        target.classList.remove('loading');
    }
});