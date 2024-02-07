import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>
    return <div>Welcome {user.username}</div>
  return (
    <div>Profile</div>
  )
}

export default Profile