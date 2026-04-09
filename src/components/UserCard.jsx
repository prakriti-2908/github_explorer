import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div className="card h-100 shadow-sm" style={{cursor: 'pointer'}} onClick={() => navigate(`/user/${user.login}`)}>
        <img src={user.avatar_url} alt={user.login} className="card-img-top p-3 rounded-circle" />
        <div className="card-body text-center">
            <h6 className="card-title fw-bold">{user.login}</h6>
            <button className="btn btn-dark btn-sm mt-1">View Profile</button>
        </div>
    </div>
  )
}

export default UserCard;