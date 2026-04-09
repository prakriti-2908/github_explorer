import React from 'react'

const Navbar = () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <p className="navbar-brand fw-bold">GitHub Explorer</p>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-regular fa-floppy-disk"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {bookmarks.length === 0 ? (
                            <li><span className="dropdown-item text-muted">No bookmarks yet</span></li>
                        ) : (
                            bookmarks.map(repo => (
                            <li key={repo.id}>
                                <a className="dropdown-item small" href={repo.html_url} target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-book me-2 text-secondary"></i>{repo.name}
                                </a>
                            </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;