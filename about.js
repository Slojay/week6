const intro = document.getElementById('intro')


intro.innerHTML = 'I am <strong>JOSHUA OSAGIEDE</strong> by name AKA SLOJAY, i was born on the 20th of Novemeber,i am a graudate from the department of Mathematical Sciences from Anchor University,i grew up in Lagos,Nigeria,i model from time to time and i am a self employed student.'

intro.style.color = 'blue'
intro.style.textTransform = 'capitalize'
intro.style.fontSize = '20px'

const title = document.querySelectorAll('h1')
title[0].style.color = 'red'
title[0].style.borderBottom = '5px solid blue'
title[0].style.textAlign = 'center'
title[0].style.textTransform = 'uppercase'
title[0].style.fontFamily = 'sans-serif'

title.textContent = 'About Myself'
alert(title.textContent)

const about = document.getElementsByClassName('body')

about[0].innerHTML = 'i am learning <abbr title="Hyper Text Markup Language">HTML </abbr>, <abbr title="Cascading Style Sheet">CSS </abbr> and <abbr title="JavaScript">JSS</abbr>'
about[1].innerText ='I love learning new things everyday \n I love sleeping \n I like playing game \n I am always interested in learning new things'
about[2].innerText = 'I am a goal getter'

about[0].style.color = 'Blue'
about[0].style.fontSize = '20px'
about[0].style.textTransform ='capitalize'

about[1].style.color = 'blue'
about[1].style.fontSize ='20px'
about[2].style.textTransform = 'capitalize'

about[2].style.color = 'blue'
about[2].style.fontSize = '20px'
about[2].style.textTransform = 'capitalize'

const ptag1 = document.getElementsByTagName('p') 

ptag1[4].innerText = ('I am always interested in learning new things')

const ptag2 = document.getElementsByTagName('p')  

ptag2[5].innerHTML =('I love sleeping') 

const ptag3 = document.getElementsByTagName('p')

ptag3[6].innerText = ('I like playing game')

ptag1[4].style.color = 'blue'
ptag1[4].style.fontSize = '20px'
ptag1[4].styke.textTransform = 'capitalize'

ptage[5].style.color = 'blue'
ptage[5].style.fontSize = '20px'
ptage[5].style.textTransform = 'capitalize'

ptag1[6].style.color = 'blue'
ptag1[6].style.fontSize = '20px'
ptag1[6].style.textTransform = 'capitalize'