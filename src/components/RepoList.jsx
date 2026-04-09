import React, { useState, useEffect } from 'react'
import { getUserRepos } from '../utils/api'
import RepoCard from './RepoCard'
import Filters from './Filters'

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState('')
  const [filterLanguage, setFilterLanguage] = useState('All')

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getUserRepos(username)
        setRepos(data)
      } catch (err) {
        setError('Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  const getFilteredAndSorted = () => {
    let result = [...repos]

    if (filterLanguage !== 'All') {
      result = result.filter(r => r.language === filterLanguage)
    }

    if (sortBy === 'stars') {
      result.sort((a, b) => b.stargazers_count - a.stargazers_count)
    } else if (sortBy === 'forks') {
      result.sort((a, b) => b.forks_count - a.forks_count)
    }

    return result
  }

  const filteredRepos = getFilteredAndSorted()

  return (
    <div>
      <h5 className="fw-bold mb-3">Repositories</h5>

      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="text-center text-muted mt-4">
          <i className="fa-solid fa-folder-open fs-1 mb-3"></i>
          <p>No repositories found</p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <>
          <Filters
            repos={repos}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterLanguage={filterLanguage}
            setFilterLanguage={setFilterLanguage}
          />
          {filteredRepos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </>
      )}
    </div>
  )
}

export default RepoList;