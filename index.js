window.addEventListener('scroll',()=>{
    let content = document.querySelector('.quote-1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;
    if(contentPosition < screenPosition){
        content.classList.add('activate');
    }else{
        content.classList.remove('activate');

    }
})

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.welcome');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;
    if(contentPosition < screenPosition){
        content.classList.add('activate2');
    }else{
        content.classList.remove('activate2');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.diagonal');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;
    if(contentPosition < screenPosition){
        content.classList.add('activate3');
    }else{
        content.classList.remove('activate3');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.quote-2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate4');
    }else{
        content.classList.remove('activate4');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.service-content');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate5');
    }else{
        content.classList.remove('activate5');

    }
})

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.r-2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate6');
    }else{
        content.classList.remove('activate6');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.r-3');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate7');
    }else{
        content.classList.remove('activate7');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.r-1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate7');
    }else{
        content.classList.remove('activate7');

    }
})