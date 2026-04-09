import React from 'react'

const RepoCard = ({ repo }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="fw-bold text-dark fs-6">
            <i className="fa-solid fa-book me-2 text-secondary"></i>{repo.name}
          </a>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>

        {repo.description && (
          <p className="text-muted small mt-2 mb-2">{repo.description}</p>
        )}

        <div className="d-flex flex-wrap gap-3 mt-2">
          {repo.language && (
            <span className="small text-muted">
              <i className="fa-solid fa-circle me-1" style={{fontSize: '10px'}}></i>{repo.language}
            </span>
          )}
          <span className="small text-muted">
            <i className="fa-regular fa-star me-1"></i>{repo.stargazers_count}
          </span>
          <span className="small text-muted">
            <i className="fa-solid fa-code-fork me-1"></i>{repo.forks_count}
          </span>
        </div>

      </div>
    </div>
  )
}

export default RepoCard;