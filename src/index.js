import './less/index.less'

// Your code goes here!
const logo = document.querySelector('.logo-heading');
const links = document.querySelectorAll('.nav-link')
const linksArray = Array.from(links);
const sectionH2 = document.querySelectorAll('h2');
const sectionH2Array = Array.from(sectionH2);
const images = document.getElementsByTagName('img');
const imagesArray = Array.from(images);
const button = document.getElementsByClassName('btn');
const buttonArray = Array.from(button);
const paras = document.getElementsByClassName('p');
const parasArray = Array.from(paras);

//window
window.addEventListener('load', event => {
    console.log('PAGE HAS FULLY LOADED');
})

//logo
logo.addEventListener('mouseover', event => {
    event.target.style.fontSize = '3rem';
    event.target.style.color = 'cyan';
})
logo.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '';
    event.target.style.color = '';
})

//links
linksArray.forEach((link) => {
    link.addEventListener('click', event => {
        event.target.style.color = 'cyan';
    })
})

//h2s
sectionH2Array.forEach((h2) => {
    h2.addEventListener('dblclick', event => {
        event.target.style.color = 'purple';
    })
})

//images
imagesArray.forEach((img) => {
    img.addEventListener('wheel', (event) => zoom(event, img))
});
let scale = 1;
function zoom(event, img) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    img.style.transform = `scale(${scale})`;
}

//buttons
buttonArray[0].addEventListener('click', event => {
    alert('Bring sunscreen!');
})
buttonArray[1].addEventListener('click', event => {
    alert('Dust off your hiking boots!');
})
buttonArray[2].addEventListener('click', event => {
    alert('Get your bathing suit ready!');
})

//paragraphs

//keydown
window.addEventListener('keydown', event => {
    if (event.key === 'f') {
        window.scrollTo(0, document.body.scrollHeight);
    }
})