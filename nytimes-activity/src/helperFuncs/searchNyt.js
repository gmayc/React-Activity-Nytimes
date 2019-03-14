import axios from 'axios';

const searchNyt = (query, key) => {
  return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${key}`)
}

export default searchNyt;