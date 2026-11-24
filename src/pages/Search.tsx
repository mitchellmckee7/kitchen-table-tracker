import { useState } from 'react';
import { Link } from 'react-router';


function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
        <h2>Kitchen Table Tracker</h2>
        <label htmlFor="metagame">What is the name of your metagame?</label>
        <input
          id='metagame'
          type='text'
          placeholder="Commander Meta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <Link to={`/metagame/${query}`}>Search</Link>
    </>
  )
}

export default Search
