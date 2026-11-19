import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(50);

  return (
    <>
        <section className='header'>
          <div className='center'>
            <h1>Kitchen Table Tracker</h1>
            <p>
              A tracking app for your very own Commander meta for Magic: The Gathering
            </p>

          </div>
        </section>
        <section className='body'>
          <div className='center'>
              <label htmlFor='slider'>Games Played {value}</label>
              <input
                id='slider'
                type='range'
                min={0}
                max={50}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
              ></input>
      
              <div className='pie-chart'></div>
            </div>
        </section>
    </>
  )
}

export default App
