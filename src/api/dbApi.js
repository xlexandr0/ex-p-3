import axios from 'axios'

const API = axios.create({
  baseURL: 'https://web.dragonball-api.com/api'
})

export const getCharacters = (limit = 12) => {
  return API.get(`/characters?limit=${limit}`)
}

export default API
