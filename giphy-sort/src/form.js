import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const [keyword, setKeyword] = useState()
  const [giphy, setGiphy] = useState('https://giphy.com/embed/WXB88TeARFVvi')

  const searchGiphy = () => {
    const api_key = 'n3TQWBfGFeDYQWqW0GgUII5S66nldPqC'
    const q = keyword
    const limit = 1

    axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=${limit}`)
    .then((response) => {
      const url = response.data.data[0].url
      setGiphy(url)
      console.log(giphy)
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <input onChange={e => setKeyword(e.target.value)}/>
      <button onClick={searchGiphy}>Pesquisar</button>
      <img src={`"${giphy}"`} alt='my giphy'/>
    </div>
  );
}