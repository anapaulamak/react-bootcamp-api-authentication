import React, { useState } from 'react'
import axios from 'axios'
import './form.styled.css'

export default function Form() {
  const [keyword, setKeyword] = useState()
  const [giphy, setGiphy] = useState()

  const searchGiphy = () => {
    const api_key = 'n3TQWBfGFeDYQWqW0GgUII5S66nldPqC'
    const q = keyword
    const limit = 1

    axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=${limit}`)
    .then((response) => {
      console.log('response', response)
      const url = response.data.data[0].embed_url
      setGiphy(url)
      console.log('url', url)
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <div className="SearchArea">
        <input onChange={e => setKeyword(e.target.value)}/>
        <button onClick={searchGiphy}>Pesquisar</button>
      </div>

      <div className="GifArea">
        <iframe src={giphy} title='gif' width="480" height="460" frameBorder="0" />
      </div>
    </div>
  );
}