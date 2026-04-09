import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUserProfile } from '../utils/api'
import RepoCard from '../components/RepoCard'
import RepoList from '../components/RepoList'

function UserPage() {
  const { username } = useParams()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getUserProfile(username)
        setProfile(data)
      } catch (err) {
        setError('Failed to fetch user profile')
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [username])

  return (
    <div className="container mt-4">

      <button className="btn btn-dark btn-sm mb-4" onClick={() => navigate('/')}>
        <i className="fa-solid fa-arrow-left me-2"></i>Back
      </button>

      {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      {!loading && !error && profile && (
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img src={profile.avatar_url} alt={profile.login} className="img-fluid rounded-circle" style={{width: '150px'}} />
          </div>
          <div className="col-12 col-md-9">
            <h4 className="fw-bold mb-0">{profile.name || profile.login}</h4>
            <p className="text-muted mb-2">@{profile.login}</p>
            {profile.bio && <p className="mb-2">{profile.bio}</p>}
            <div className="d-flex flex-wrap gap-3 text-muted">
              {profile.location && (
                <span><i className="fa-solid fa-location-dot me-1"></i>{profile.location}</span>
              )}
              <span><i className="fa-solid fa-users me-1"></i>{profile.followers} followers</span>
              <span><i className="fa-solid fa-user-plus me-1"></i>{profile.following} following</span>
              <span><i className="fa-solid fa-book me-1"></i>{profile.public_repos} repos</span>
            </div>
          </div>
        </div>
      )}
      {!loading && !error && profile && (
        <RepoList username={username} />
      )}
    </div>
  )
}

export default UserPage;