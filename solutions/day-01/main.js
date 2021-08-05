// 1
const { countries } = require('./countries.js')
const { webTechs } = require('./web_techs.js')

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text.replace('.', '')
text.replace(',', '')

const words = text.split(' ')

console.log(words)
console.log(words.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
console.log(shoppingCart)

if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart)

// 4
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
  console.log(countries)
}

// 5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocessor')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)


/* --- LEVEL 3 --- */
// 1a
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
const minAge = ages[0];
const maxAge = ages[ages.length - 1]
const midIndex = Math.floor(ages.length / 2)
const medianAge = (ages % 2 == 0) ? ((ages[midIndex] + ages[midIndex+1]) / 2) : ages[midIndex]
let sum = 0
for (let i = 0; i < ages.length; i++) {
  sum += ages[i]
}
const avg = sum / ages.length
const range = maxAge - minAge
const lastVal = Math.abs((minAge - avg) - (maxAge - avg))
console.log(`
  minAge: ${minAge}
  maxAge: ${maxAge}
  medianAge: ${medianAge}
  avg: ${avg}
  range: ${range}
  lastVal: ${lastVal}
`)

// 1b
const countriesCopy1 = [...countries]
console.log(countriesCopy1.slice(0, 10))
