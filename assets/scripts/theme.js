const themeChanger=document.getElementById('themeChanger');
const rootHTML=document.documentElement;

const favicon=document.getElementById('favicon');

const htmlIcon=document.querySelector('.skill-background:nth-child(1)');
const cssIcon=document.querySelector('.skill-background:nth-child(2)');
const jsIcon=document.querySelector('.skill-background:nth-child(3)');
const pyIcon=document.querySelector('.skill-background:nth-child(4)');
const djIcon=document.querySelector('.skill-background:nth-child(5)');
const gitIcon=document.querySelector('.skill-background:nth-child(6)');

const tdiIcon=document.querySelector('.certification-background:nth-child(1)');
const ciscoFirstIcon=document.querySelector('.certification-background:nth-child(2)');
const ciscoSecondIcon=document.querySelector('.certification-background:nth-child(3)');


function changeTheme(){
    const currentTheme=rootHTML.getAttribute('data-theme');

    currentTheme==='dark' ? rootHTML.setAttribute('data-theme','light') : rootHTML.setAttribute('data-theme','dark');

    themeChanger.classList.toggle('bxs-sun');
    themeChanger.classList.toggle('bxs-moon');
    
    currentTheme==='dark' ? favicon.setAttribute('href','/assets/img/favicon/jp-logo-light-theme.png') : favicon.setAttribute('href','/assets/img/favicon/jp-logo-dark-theme.png');
    
    currentTheme==='dark' ? htmlIcon.style.background='url("assets/img/html/logo-200-white.png") no-repeat center': htmlIcon.style.background='url("assets/img/html/logo-200-black.png") no-repeat center';

    currentTheme==='dark' ? cssIcon.style.background='url("assets/img/css/logo-200-white.png") no-repeat center':cssIcon.style.background='url("assets/img/css/logo-200-black.png") no-repeat center';

    currentTheme==='dark' ? jsIcon.style.background='url("assets/img/js/logo-200-white.png") no-repeat center':jsIcon.style.background='url("assets/img/js/logo-200-black.png") no-repeat center';

    currentTheme==='dark' ? pyIcon.style.background='url("assets/img/python/logo-200-white.png") no-repeat center':pyIcon.style.background='url("assets/img/python/logo-200-black.png") no-repeat center';

    currentTheme==='dark' ? djIcon.style.background='url("assets/img/django/logo-200-white.png") no-repeat center':djIcon.style.background='url("assets/img/django/logo-200-black.png") no-repeat center';

    currentTheme==='dark' ? gitIcon.style.background='url("assets/img/git/logo-200-white.png") no-repeat center':gitIcon.style.background='url("assets/img/git/logo-200-black.png") no-repeat center'

    currentTheme==='dark' ? tdiIcon.style.background='url("assets/img/tdi/logo-200-lavender.png") no-repeat center':tdiIcon.style.background='url("assets/img/tdi/logo-200-white.png") no-repeat center';

    currentTheme==='dark' ?ciscoFirstIcon.style.background='url("assets/img/cisco/logo-200-lavender.png") no-repeat center':ciscoFirstIcon.style.background='url("assets/img/cisco/logo-200-white.png") no-repeat center';

    currentTheme==='dark' ?ciscoSecondIcon.style.background='url("assets/img/cisco/logo-200-lavender.png") no-repeat center':ciscoSecondIcon.style.background='url("assets/img/cisco/logo-200-white.png") no-repeat center';
}

themeChanger.addEventListener('click',changeTheme);