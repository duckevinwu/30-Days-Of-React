/* --- SECTION 1 --- */

// 1
const emtpyArr = []

// 2
const fiveOrMore = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3
console.log(fiveOrMore.length);

// 4
const firstItem = fiveOrMore[0];
const lastItem = fiveOrMore[fiveOrMore.length - 1];
const middleItem = fiveOrMore[Math.floor(fiveOrMore.length / 2)];

console.log(`first: ${firstItem}, middle: ${middleItem}, last: ${lastItem}`)

// 5
const mixedDataTypes = [
  1,
  2.0,
  'three',
  false,
  { key: 'value' },
  6
]

console.log(mixedDataTypes.length);

// 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9
const firstCompany = itCompanies[0]
const middleCompany = itCompanies[Math.floor(itCompanies.length)]
const lastCompany = itCompanies[itCompanies.length - 1]

console.log(`first: ${firstCompany}, middle: ${middleCompany}, last: ${lastCompany}`)

// 10
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i])
}

// 11
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase())
}

// 12
const itCompaniesCopy = [...itCompanies]
const lastCompanyCopy = itCompaniesCopy.pop()
console.log(`${itCompaniesCopy.join(', ')}, and ${lastCompanyCopy} are big IT companies`)

// 13
const doesCompanyExist = (company) => {
  if (itCompanies.indexOf(company) == -1) {
    return `${company} not found`
  } else {
    return company
  }
}

console.log(doesCompanyExist('Microsoft'));
console.log(doesCompanyExist('Tesla'));

// 14
const answer14 = []
for (let i = 0; i < itCompanies.length; i++) {
  const s = itCompanies[i];
  let count = 0;
  for (let j = 0; j < s.length; j++) {
    let c = s.charAt(j);
    if (c === 'o' || c === 'O') {
      count++;
      if (count >= 2) break;
    }
  }
  if (count < 2) answer14.push(s)
}

console.log(answer14)

// 15
const copy15 = [...itCompanies]
copy15.sort()
console.log(copy15)

// 16
const copy16 = [...itCompanies]
copy16.reverse()
console.log(copy16)

// 17
console.log(itCompanies.slice(0,3))

// 18
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))

// 19
const middleIndex = Math.floor(itCompanies.length / 2)
console.log(itCompanies.slice(middleIndex, middleIndex + 1))

// 20
const copy20 = [...itCompanies]
copy20.shift()
console.log(copy20)

// 21
const copy21 = [...itCompanies]
copy21.splice(middleIndex, 1)
console.log(copy21)

// 22
const copy22 = [...itCompanies]
copy22.pop()
console.log(copy22)

// 23
const result = itCompanies.splice()
console.log(result)

/* --- SECTION 3--- */

// LEVEL 1

// 1
let dog = {}

// 2
console.log(dog)

// 3
dog = {
  name: 'Dog',
  legs: 4,
  color: 'black',
  bark: () => {
    return 'woof woof'
  }
}

console.log(dog)

// 4
console.log(`
  name: ${dog.name}
  legs: ${dog['legs']}
  color: ${dog.color}
  bark: ${dog.bark()}
`)

dog['breed'] = 'Labrador'
dog.getDogInfo = function() {
  return this.name
}

console.log(dog)
console.log(dog.getDogInfo())

// LEVEL 2
const users1 = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1
const maxSkilledPerson = () => {
  let maxSkills = 0
  let name = ''

  for (user in users1) {
    const skillNum = users1[user].skills.length
    if (skillNum > maxSkills) {
      maxSkills = skillNum
      name = user
    }
  }

  return name
}

console.log(maxSkilledPerson())

// 2
const greaterThan50 = () => {
  let count = 0
  for (user in users1) {
    if (users1[user].points >= 50) count++
  }
  return count
}
console.log(greaterThan50())

// 3
const mernStack = () => {
  let answer = []
  for (user in users1) {
    const skills = users1[user].skills
    if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
      answer.push(user)
    }
  }
  return answer
}
console.log(mernStack())

// 4
const newUsers = Object.assign({}, users1);
newUsers['LeBron'] = {
  points: 100
}
console.log(newUsers)

// 5
console.log(Object.keys(users1))

// 6
console.log(Object.values(users1))


// LEVEL 3
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

// 2a
const signUp = (username, email, password) => {
  let exists = false
  users.forEach((user) => {
    if (user.username === username) {
      console.log('User already exists')
      exists = true;
      return;
    }
  })
  if (exists) return
  const newUser = {
    _id: 'abcdef',
    username: username,
    email: email,
    password: password,
    createdAt: '08/01/2021 10:00 AM',
    isLoggedIn: false,
  }
  users.push(newUser)
}

signUp('LeBron', 'email@example.com', 'password')
console.log(users)

signUp('Martha', 'martha@test.com', 'marthapass')
console.log(users)

// 2b
const signIn = (username, password) => {
  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      user.isLoggedIn = true
      return
    }
  })
}

signIn('LeBron', 'password')
console.log(users)

signIn('Martha', 'password')
console.log(users)

// 3a
const rateProduct = (productId, user, rating) => {
  products.forEach((product) => {
    if (product['_id'] === productId) {
      const newRating = {
        userId: user,
        rate: rating
      }
      product.ratings.push(newRating)
    }
  })
}

rateProduct('aegfal', 'abcdef', 1)
console.log(products)

// 3b
const averageRating = (productId) => {
  let avg = 'n/a'
  products.forEach((product) => {
    if (product['_id'] === productId && product.ratings.length > 0) {
      let sum = 0;
      product.ratings.forEach((rating) => {
        sum += rating.rate
      })
      avg = sum / product.ratings.length
    }
  })
  return avg
}

console.log(averageRating('eedfcf'))
console.log(averageRating('aegfal'))
console.log(averageRating('lebron'))

// 4
const likeProduct = (productId, userId) => {
  products.forEach((product) => {
    if (product['_id'] === productId) {
      const likes = product.likes
      if (likes.includes(userId)) {
        likes.splice(likes.indexOf(userId), 1)
      } else {
        likes.push(userId)
      }
    }
  })
}

likeProduct('aegfal', 'lebron')
console.log(products)

likeProduct('aegfal', 'fg12cy')
console.log(products)

/* --- SECTION 4--- */

// LEVEL 1

// 1
const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}
console.log(fullName('Lebron', 'James'))

// 2
const addNumbers = (num1, num2) => {
  return num1 + num2;
}
console.log(addNumbers(3, 4))

// 3
const areaOfCircle = (r) => {
  return Math.PI * r * r
}
console.log(areaOfCircle(5))

// LEVEL 2
const sumUnlimited = (...args) => {
  let sum = 0
  args.forEach((x) => {
    sum += x
  })
  return sum
}

console.log(sumUnlimited(1, 2, 3))
console.log(sumUnlimited(1, 2, 3, 4))



const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const getPersonInfo = (personObj) => {
  const { firstName, lastName, age, country, job, skills, languages } = person
  const lastSkill = (skills.length >= 2) ? skills.pop() : ''
  const lastLanguage = (languages.length >= 2) ? languages.pop() : ''
  return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job} He teaches ${skills.join(', ')} ${(lastSkill === '') ? '' : `and ${lastSkill}`}. He speaks ${languages.join(', ')} ${(lastLanguage === '') ? '' : `and ${lastLanguage}`}`
}

console.log(getPersonInfo(person))


const foods = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1
foods.forEach((food) => console.log(food.price))

// 2
foods.forEach((food) => console.log(`The price of ${food.product} is ${(typeof(food.price) === 'number') ? food.price + ' euros' : 'unknown'}.`))

// 3
let sum3 = 0;
foods.forEach((food) => { if (typeof(food.price) === 'number') sum3 += food.price })
console.log(sum3)

// 4
const prices = foods.map((food) => food.price)
console.log(prices)

// 5
const filteredPrices = foods.filter((food) => typeof(food.price) === 'number')
console.log(filteredPrices)

// 6
const sum6 = foods
              .filter((food) => typeof(food.price) === 'number')
              .map((food) => food.price)
              .reduce((acc, cur) => acc + cur)
console.log(sum6)

// 7
const sum7 = foods.reduce((arr, cur) => arr + ((typeof(cur.price) === 'number') ? cur.price : 0), 0)
console.log(sum7)

// 8
const firstNoPrice = foods.find((food) => typeof(food.price) !== 'number')
console.log(firstNoPrice)

// 9
const firstNoPriceIndex = foods.findIndex((food) => typeof(food.price) !== 'number')
console.log(firstNoPriceIndex)

// 10
const someNoPrice = foods.some((food) => typeof(food.price) !== 'number')
console.log(someNoPrice)

// 11
const allPrice = foods.every((food) => typeof(food.price) !== 'number')
console.log(allPrice)
