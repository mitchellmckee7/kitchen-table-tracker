import { useState } from 'react';
import { useParams } from "react-router";
import '../styles/App.css';
import Pie from '../components/Pie';
import Legend from '../components/Legend';
import History from '../components/History';
import Filters from '../components/Filters';

function Metagame() {
  const [value, setValue] = useState(30);
  let params = useParams();

  return (
    <>
        <div className='heading'>
          <h2>{params.metagameId}</h2>
        </div>
          <div className='chart-container'>
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
            <div className='chart-item'>
              <Pie threshold={value}></Pie> 
            </div>
            <div className='chart-item'>            
              <Legend threshold={value}></Legend>
            </div>
          </div>
        <History></History>
    </>
  )
}

export default Metagame
