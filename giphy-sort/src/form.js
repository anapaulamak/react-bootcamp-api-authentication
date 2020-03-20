import React, { useState } from 'react';
import axios from 'axios';
import './form.styled.css';
import { LoadingOutlined } from '@ant-design/icons';

export default function Form() {
  const [keyword, setKeyword] = useState()
  const [giphy, setGiphy] = useState()
  const [loading, setLoading] = useState(false)

  const searchGiphy = () => {
    setLoading(true)
    const api_key = 'n3TQWBfGFeDYQWqW0GgUII5S66nldPqC'
    const q = keyword
    const limit = 1

    axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=${limit}`)
    .then((response) => {
      console.log('response', response)
      const url = response.data.data[0].embed_url
      setGiphy(url)
      setLoading(false)
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  return (
    <>
      <div className="SearchArea">
        <input onChange={e => setKeyword(e.target.value)}/>
        <button onClick={searchGiphy}>Pesquisar</button>
      </div>

      {loading ?
        <div>
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        </div>
        :
        <div className="GifArea">
          <iframe src={giphy} title='gif' width="480" height="460" frameBorder="0" />
        </div>
      }
    </>
  );
}