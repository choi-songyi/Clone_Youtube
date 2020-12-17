const moreBtn = document.querySelector('.more');
const title = document.querySelector('.title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});
