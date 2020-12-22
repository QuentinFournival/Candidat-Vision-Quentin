const boutonPop = document.querySelector('#acc');
const pop = document.querySelector('#Pop');
const bg = document.querySelector('#bg');

boutonPop.addEventListener('click', () =>{
    pop.style.display =" none";
    pop.style.transition = "all 0.5s";
    bg.style.opacity = 0;
    bg.style.transition = "all 0.5s";
    bg.style.display =" none";

})
