import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const token = import.meta.env.VITE_GITHUB_TOKEN

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: token ? { Authorization: `token ${token}` } : {},
})

export const searchUsers = async (query) => {
  const response = await githubApi.get(`/search/users?q=${query}`)
  return response.data.items
}