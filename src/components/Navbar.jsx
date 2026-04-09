import React from 'react'

const Navbar = () => {
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
                        <li className="dropdown-item">No Bookmarks</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;