const rhyme = document.querySelector('h1')
const nursery = rhyme.textContent
const lists = document.querySelectorAll('ol li')

// lenght of a string
 
lists[0].textContent += nursery.length
// the + is an addition assignment operator, it simply means to add nursery.lenght to the existing textcontent

// to uppercase method
lists[1].innerHTML +=  `<strong>${nursery.toUpperCase()}</strong>`
// to lowercase method
lists[2].innerHTML += `<strong>${nursery.toLowerCase()}</strong>`
// firstCharacter
lists[3].innerHTML += `First Character: ${nursery[0]}`
// last character
lists[4].innerHTML += `last character: ${nursery.length -1}`
// indexof
lists[5].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t')}`
// slice
lists[6].innerHTML = `The index of the second letter "t" is ${nursery.indexOf('t', 10)}`
// indexof
lists[7].innerHTML += `the index of the letter "z" is ${nursery.indexOf('z')}`
// indexof
lists[8].textContent = 'The last index of letter \'a\ ' + nursery.lastIndexOf('a')
// replace
lists[9].innerText = 'replace "you" with "we": ' + nursery.replace('you', "we")
// replace
lists[10].innerText = 'repalce all "o" with "you"' + nursery.replaceAll('o', 'u')
// slice
// const twinkle = nursery.slice(0, nursery.indexOf('e')+ 1)
const twinkle = nursery.slice(0,28)
lists[11].textContent = twinkle
// repeat
lists [12].textContent = twinkle.repeat(5)
// charat
 lists[13].textContent = 'charcter at index 20: ' + nursery.charAt(20 ).toUpperCase()
// emdswith
lists[14].textContent = 'if the text ends with "high" ' + nursery.endsWith('high')
// startswith
lists[15].textContent =' if text start with "k" '+ nursery.startsWith('k')
// includes
lists[16].textContent = 'if text includes "car" ' + nursery.includes('car')
// split
lists[17].textContent = nursery.split(' ')
// this code above simple splits the code where there is space,
// note tha when you leave the parenthesis blank ('') its going to split at each character
// you can also join text with the split  for example split('').join(''),ypo can join the splittext with a plus or hyphen

// concatenate
lists[18].textContent = 'the nursery rhyme starts with : '.concat(twinkle,'marvel')
// multiple strings can be attached within a concat method
lists[19].textContent = `the index of the second "w" is: ${nursery.indexOf('w', 10)}`
lists[20].textContent = `the index of the second "i" is: ${nursery.indexOf('i', 4)}`
lists[21].textContent  = `the last index of \'y'\  is: ${nursery.lastIndexOf('y')}`