
/*
let ToggleDark = document.querySelector('ToggleDark');

ToggleDark.onclick = () => {
    if(ToggleDark.classList.contains('bx-moon')){
        ToggleDark.classList.replace('bx-moon', 'bxs-moon');
        document.body.classList.add('color');
    }else{
        ToggleDark.classList.replace('bxs-moon', 'bx-moon');
        document.body.classList.remove('color');
    }
}
*/


/*
const toggle = document.getElementById('ToggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bxs-moon')
    if(this.classList.toggle('bx bx-moon')) 
    
    
    {
        body.style.background ='white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
}) 
*/




document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
    });

    const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal  ({
    distance: '70px',
    duration: 2700,
    reset: true
})



