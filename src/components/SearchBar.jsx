import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text bg-white border border-end-0 border-secondary text-muted pe-0">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        
                        <input type="text" className="form-control shadow-none border-start-0 border-secondary" placeholder='Search by username...' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar;