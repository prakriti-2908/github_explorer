import { useState, useEffect } from 'react'
import { searchUsers } from '../utils/api'
import useDebounce from './useDebounce'

function useGithubFetch(query) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const debouncedQuery = useDebounce(query, 400)

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setUsers([])
      setError(null)
      return
    }

    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await searchUsers(debouncedQuery)
        setUsers(data)
      } catch (err) {
        setError('Something went wrong. Please try again.')
        setUsers([])
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [debouncedQuery])

  return { users, loading, error }
}

export default useGithubFetch;