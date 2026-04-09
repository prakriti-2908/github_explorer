import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [search,setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    }

    const handleClear = () => {
        setSearch('');
        onSearch('');
    }
  return (
    <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text bg-white border border-end-0 border-secondary text-muted pe-0">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        
                        <input type="text" className="form-control shadow-none border-start-0 border-secondary" placeholder='Search by username...' onChange={handleChange} value={search}/>
                        {
                            search && (
                                <button className="btn btn-outline-secondary border-start-0" type='button' onClick={handleClear}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar;