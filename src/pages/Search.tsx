import { useState } from 'react';
import { Link } from 'react-router';
import { createMetagame } from "../services/Metagames.service";

function Search() {
  const [query, setQuery] = useState("");

  const [message, setMessage] = useState([]);
  
  const handleAddMeta = async () => {
    if (query === "" || Number.isNaN(Number(query))) return;

    try {
      const data = await createMetagame(Number(query));
      setMessage(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
        <h2>Kitchen Table Tracker</h2>
        <label htmlFor="metagame">What is the name of your metagame?</label>
        <input
          id='metagame'
          type='number'
          placeholder="0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button onClick={handleAddMeta}>Add Meta</button>
        <Link to={`/metagame/${query}`}>Search</Link>
    </>
  )
}

export default Search
