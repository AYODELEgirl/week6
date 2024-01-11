// QUERY SELECTOR
const title = document.querySelector('h2')
title.textContent = 'DOM Manipulations'


const para1 = document.querySelector('p')
const para2 = document.querySelector('p:nth-of-type(2')
const para3 = document.querySelector('body>:nth-child(5)')
const para4 = document.querySelector('p+p+p+p')
const para5 = document.querySelector('.last')


para1.textContent = 'this is the first paragraph'
para2.textContent = 'this is the second paragraph'
para3.textContent = 'this is the third paragraph'
para4.textContent = 'this is the fourth paragraph'
para5.textContent = 'this is the fifth paragraph'


// querySelectorAll
const lists = document.querySelectorAll('li')
lists[0].textContent = 'list 001'
lists[1].textContent = 'list 002'
lists[2].textContent = 'list 003'
lists[3].textContent = 'list 004'  
lists[4].textContent = 'list 005'
lists[5].textContent = 'list 006'


const unique = document.getElementById('one')
// unique.style.backgroundColor = '#E55'
unique.style.textTransform = 'uppercase'
unique.style.borderBottom = '6px dotted blue'

// getElementByClassName

const classOne = document.getElementsByClassName('one')
classOne[1].textContent = 'this is a class paragraph'

let div1 = document.getElementsByTagName('p')
div1[0].style.backgroundColor = 'green'
div1[1].textContent = ('marvelous')
div1[1].style.textAlign = 'right'
lists[2].textContent = 'marvel'

const par = document.querySelector('#parlo')
par.innerHTML = `I'm a <br> <strong> frontend </strong> developer. He said <q> I am coming </q>`


// this getelementbyclass behaves like queryselector all....which means we need to add index,so using the [1] will apply the styling to the the second element thet has the class one