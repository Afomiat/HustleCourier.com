window.addEventListener('scroll',()=>{
    let content = document.querySelector('.p-top');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate');
    }else{
        content.classList.remove('activate');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.his-des');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate1');
    }else{
        content.classList.remove('activate1');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.img-cul');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate2');
    }else{
        content.classList.remove('activate2');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.val-1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate6');
    }else{
        content.classList.remove('activate6');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.val-2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate3');
    }else{
        content.classList.remove('activate3');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.val-3');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate4');
    }else{
        content.classList.remove('activate4');

    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.val-4');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate5');
    }else{
        content.classList.remove('activate5');

    }
})

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.val-h2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('activate7');
    }else{
        content.classList.remove('activate7');

    }
})