const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.navbar-desk');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-lin').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/*-------window popup part--------------*/

const p = document.querySelector('.modal-mobile');
const b = document.querySelector('.project');
const c = document.querySelector('.see-proj');
const Y = document.querySelector('.xx');
const section = document.querySelector('section');
