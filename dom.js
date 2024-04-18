const idOne = document.getElementById('one')

idOne.textContent = 'Brenda'

document.getElementById('lone').textContent = 'George'

const title = document.querySelector('h1')

title.textContent= 'DOM Manipulations'

const lists = document.querySelectorAll('ul li')

lists[1].textContent ='John'
lists[2].textContent ='Peter'

const twos = document.querySelectorAll('.two')

twos[0].innerHTML = 'Joshua deals with <strong>computer gadgets</strong>'

const deuxes = document.getElementsByClassName('two')

deuxes[1].innerText= 'Joshua is \n always  \n\n\n in class late'
deuxes[3].innerText= 'Abdulkareem'

lists[3].style.color = 'blue'
lists[3].style.backgroundColor = '#000'
lists[3].style.paddingBlock = '30px'

// alert(title.textContent)
