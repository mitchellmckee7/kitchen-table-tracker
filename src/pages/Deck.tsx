import { useState } from 'react';
import '../styles/App.css';
import Pie from '../components/Pie';
import Legend from '../components/Legend';
import History from '../components/History';
import Filters from '../components/Filters';


function Deck() {
  const [value, setValue] = useState(30);

  return (
    <>
        <section className='body'>
          <div className='heading'>
            <h2>Kitchen Table Tracker</h2>
          </div>
          <div className='filters'>
            <div className='slider'>
              <Filters value={value}></Filters>
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

          <div></div>
          <Legend threshold={value}></Legend>
          <Pie threshold={value}></Pie> 
          <History></History>
        </section>
    </>
  )
}

export default Deck
