import './less/index.less'

// Your code goes here!
const logo = document.querySelector('.logo-heading');
const links = document.querySelectorAll('.nav-link')
const linksArray = Array.from(links);
const welcomeBus = document.querySelectorAll('h2');
const welcomeBusArray = Array.from(welcomeBus);

//logo
logo.addEventListener('mouseover', event => {
    event.target.style.fontSize = '3rem';
    event.target.style.color = 'blue';
})

logo.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '4rem';
    event.target.style.color = 'black';
})

//links
linksArray[0].addEventListener('click', event => {
    event.target.style.color = 'cyan';
})
linksArray[1].addEventListener('click', event => {
    event.target.style.color = 'cyan';
})
linksArray[2].addEventListener('click', event => {
    event.target.style.color = 'cyan';
})
linksArray[3].addEventListener('click', event => {
    event.target.style.color = 'cyan';
})

//h4s
welcomeBusArray[0].addEventListener('mouseover', event => {
    event.target.style.color = 'green';
})
welcomeBusArray[1].addEventListener('mouseover', event => {
    event.target.style.color = 'orange';
})
welcomeBusArray[2].addEventListener('mouseover', event => {
    event.target.style.color = 'purple';
})
welcomeBusArray[3].addEventListener('mouseover', event => {
    event.target.style.color = 'pink';
})