window.addEventListener('scroll',()=>{
    let content = document.querySelector('.main-row');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;
    if(contentPosition < screenPosition){
        content.classList.add('activate');
    }else{
        content.classList.remove('activate');

    }
})







