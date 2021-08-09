// index.js
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    backgroundColor: bgColor
  }
  return (
    <div style={styles}>
      <h2 style={{color: 'white'}}>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => {
  const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB',
  'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL',
  'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

  const skillStyle = {
    padding: '5px 10px 5px 10px',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '5px',
    margin: '5px 10px 0 0',
    minWidth: '50px',
    textAlign: 'center'
  }

  const skillsArr = skills.map((skill) =>
    <div key={skill} style={skillStyle}>{skill}</div>
  )

  return (
    <div className='user-card' style={{display: 'flex', flexDirection: 'column', padding: '20px', border: '1px solid gray', borderRadius: '10px', margin: '50px 0 50px 0'}}>
      <img src={asabenehImage} alt='asabeneh image' />
      <h2 style={{fontSize: '1rem', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '20px', letterSpacing: '1px'}}>Asabeneh Yetayeh</h2>
      <p style={{marginTop: '20px'}}>Senior Developer, Finland</p>
      <div style={{marginTop: '20px'}}>
        <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Skills</p>
        <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '10px'}}>
          {skillsArr}
        </div>
      </div>
      <p style={{marginTop: '20px', fontSize: '14px', color: 'gray'}}>Joined on August 30, 2020</p>
    </div>
  )
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

const FrontendTech = () => {
  const techs = [cssLogo, htmlLogo, jsLogo, reactLogo]
  const techArr = techs.map((tech, i) =>
    <img key={i} style={{width: '20%'}}src={tech}></img>
  )
  return (
    <div style={{width: '100%', background: 'gainsboro', padding: '30px', margin: '50px 0 50px 0'}}>
      <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '30px'}}>Front End Technologies</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>{techArr}</div>
    </div>
  )
}

const Subscribe = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const inputStyles = {
    padding: '10px',
    fontFamily: 'Montserrat',
    borderRadius: '5px',
    border: 'none'
  }

  const redButton = {
    padding: '10px 100px 10px 100px',
    backgroundColor: 'red',
    color: 'white',
    fontFamily: 'Montserrat',
    border: 'none',
    marginTop: '20px',
    borderRadius: '5px'
  }

  const handleSubmit = () => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      email: email
    })
  }

  return (
    <div style={{background: 'lightBlue', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 0 30px 0', margin: '50px 0 50px 0', borderRadius: '10px'}}>
      <h3 style={{textTransform: 'uppercase', fontWeight: '400', fontSize: '1.5rem'}}>Subscribe</h3>
      <h4 style={{margin: '40px 0 40px 0', fontWeight: 'normal'}}>Sign up with your email address to receive news and updates</h4>
      <div style={{display: 'flex'}}>
        <input style={inputStyles} placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <input style={{...inputStyles, margin: '0 10px 0 10px'}} placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
        <input style={inputStyles} placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
        <button style={redButton} onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  )
}

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <FrontendTech/>
      <Subscribe/>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
