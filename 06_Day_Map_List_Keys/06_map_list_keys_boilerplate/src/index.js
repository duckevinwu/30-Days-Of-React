import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenHighestPopulation } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

const NumberSquare = (props) => {
  const [color, setColor] = useState('green')

  const squareStyles = {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    margin: '1px'
  }

  const numberStyles = {
    fontSize: '2rem'
  }

  useEffect(() => {
    const isPrime = () => {
      if (props.value < 2) { return false }
      const root = Math.floor(Math.sqrt(props.value))
      for (let i = 2; i <= root; i++) {
        if (props.value % i === 0) return false
      }
      return true
    }

    let color = 'green'
    if (isPrime()) {
      color = 'red'
    } else if (props.value % 2 === 1) {
      color = 'yellow'
    }
    setColor(color)
  }, [props.value])

  return (
    <div style={squareStyles}>
      <p style={numberStyles}>{props.value}</p>
    </div>
  )
}

const NumberGrid = () => {
  const [numbers, setNumbers] = useState([])

  const gridStyles = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  const generateNumbers = useCallback(() => {
    let array = []
    for (let i = 0; i < 30; i++) {
      array.push(Math.floor(Math.random() * 100))
    }
    return array
  }, [])

  useEffect(() => {
    const nums = generateNumbers()
    const numArr = nums.map((num, i) =>
      <NumberSquare key={i} value={num}/>
    )
    setNumbers(numArr)
  }, [generateNumbers])

  return (
    <div style={gridStyles}>
      {numbers}
    </div>
  )
}

const ColorSquare = (props) => {
  const squareStyles = {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    margin: '1px',
    backgroundColor: props.color
  }

  return (
    <div style={squareStyles}>{props.color}</div>
  )
}

const ColorGrid = () => {
  const [colors, setColors] = useState([])

  const gridStyles = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  useEffect(() => {
    const generateColor = () => {
      let color = '#'
      const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 15)]
      }
      return color
    }

    let colorArr = []
    for (let i = 0; i < 30; i++) {
      colorArr.push(generateColor())
    }

    const squares = colorArr.map((color, i) =>
      <ColorSquare color={color} key={i} />
    )

    setColors(squares)
  }, [])

  return (
    <div style={gridStyles}>
      {colors}
    </div>
  )
}

const BarRow = (props) => {
  const { name, percent, population } = props

  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', margin: '10px 0 10px 0'}}>
      <p style={{minWidth: '250px', textTransform: 'uppercase'}}>{name}</p>
      <div style={{width: `${percent}%`, backgroundColor: 'orange', height: '50px', marginRight: '10px'}}></div>
      <p style={{marginLeft: 'auto'}}>{population.toLocaleString()}</p>
    </div>
  )
}

const BarGraph = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const worldObj = tenHighestPopulation.find((country) => country.country === 'World')
    const totalPop = worldObj.population

    const rows = tenHighestPopulation.map((country, i) => {
      const percent = ((country.population / totalPop) * 100).toFixed(2)
      return <BarRow key={i} name={country.country} percent={percent} population={country.population} />
    })

    setRows(rows)
  }, [])

  return (
    <div style={{width: '100%'}}>{rows}</div>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '100px 5% 100px 5%',
    alignItems: 'center'
  }

  const headingStyle = {
    fontSize: '3rem',
    paddingBottom: '50px'
  }

  return (
    <div className='app'>
      <div style={appStyles}>
        <h1 style={headingStyle}>Number Generator</h1>
        <NumberGrid />
      </div>
      <div style={appStyles}>
        <h1 style={headingStyle}>Hexadecimal Colors</h1>
        <ColorGrid />
      </div>
      <div style={{...appStyles, paddingBottom: '50px'}}>
        <h1 style={headingStyle}>Word Population</h1>
        <BarGraph />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
