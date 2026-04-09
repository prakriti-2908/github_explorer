import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useGithubFetch from '../hooks/useGithubFetch';
import UserCard from '../components/UserCard';

const HomePage = () => {
    const[search,setSearch] = useState('');
    const {users,loading,error} = useGithubFetch(search);
  return (
    <>
        <div className="container mt-4">
            <SearchBar onSearch={setSearch}/>
            {loading && (
                <div className="text-center mt-5">
                    <div className="spinner-border text-secondary" role="status">
                        
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger mt-4 text-center">{error}</div>
            )}

            {!loading && !error && users.length === 0 && (
                <div className="text-center text-muted mt-5">
                    <i className="fa-solid fa-user fs-1 mb-3"></i>
                    {search &&(<p>No users found for "{search}"</p>)}
                    {!search &&(<p>Search GitHub users</p>)}
                </div>
            )}

            {!loading && !error && users.length > 0 && (
                <div className="row mt-4">
                {users.map(user => (
                    <div key={user.id} className="col-6 col-md-3 mb-4">
                        <UserCard user={user}/>
                    </div>
                ))}
                </div>
            )}
        </div>
    </>
  )
}

export default HomePage;