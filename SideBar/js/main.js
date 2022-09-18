const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');

openMenu.addEventListener('click', () => {
    sideMenu.classList.add('active');
})

hideMenuIcon.addEventListener('click', () => {
    sideMenu.classList.remove('active');
})