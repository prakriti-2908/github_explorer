import React from 'react'

const Filters = ({ repos, sortBy, setSortBy, filterLanguage, setFilterLanguage }) => {
  const languages = ['All', ...new Set(repos.map(r => r.language).filter(Boolean))]

  return (
    <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
      <select
        className="form-select form-select-sm w-auto"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
      </select>

      <select
        className="form-select form-select-sm w-auto"
        value={filterLanguage}
        onChange={(e) => setFilterLanguage(e.target.value)}
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  )
}

export default Filters;