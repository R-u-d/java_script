// # # # SELECTING ELEMENTS # # #



// # ACCESSING ELEMENTS

// accessing an element inside a class
const singleInsideClass = document.querySelector('.hero-content h1')

// accessing all elements inside a class
const all = document.querySelectorAll('.nav-list a');

// accessing a single element directly
const singleDirectly = document.querySelector('.btn');



// # MODIFYING ELEMENTS

// modifying color of an element
const header = document.querySelector('.header');
header.style.backgroundColor = '#b5651d';

// modifying font-size of an element
singleInsideClass.style.fontSize = '3rem';

// looping through all elements inside 'all' class and modifying text-color
all.forEach(e => { 
    e.style.color = '#faf0e6'
})



// # CREATING AND ASSIGNING ELEMENTS

// creating a new 'p' element inside a class
const openTimes = document.createElement('p');
openTimes.textContent = 'Open daily from 7 AM to 9 PM.'

// accessing 'hero-content' via querySelector - and asigning the new created 'p' as a child inside of it
const heroContent = document.querySelector('.hero-content')
heroContent.appendChild(openTimes)

// accessing 'hero-content' via className(note: returned as HTML-collection) - and asigning the new created 'p' as a child inside of it
const heroContent2 = document.getElementsByClassName('hero-content');
heroContent2[0].appendChild(openTimes)