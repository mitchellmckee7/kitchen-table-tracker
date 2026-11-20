import { useState } from 'react'
import './App.css'
import Pie from './components/Pie';
import Legend from './components/Legend'

function App() {
  const [value, setValue] = useState(30);

  return (
    <>
        <section className='body'>
          <div className='heading'>
            <h2>Kitchen Table Tracker</h2>
          </div>
          <div className='filters'>
            <div className='slider'>
              <label htmlFor='slider'>Minimum Games Played: {value}</label>
              <input
                id='slider'
                type='range'
                min={0}
                max={30}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
              ></input>
            </div>
          </div>
          <Legend threshold={value}></Legend>
          <Pie threshold={value}></Pie>
        </section>
    </>
  )
}

export default App
