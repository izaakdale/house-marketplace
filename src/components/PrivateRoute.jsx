import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'
import LoadingIcon from './LoadingIcon'

const PrivateRoute = () => {

    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return (
            <div className="centered-loading">
                <LoadingIcon size={50}/>
            </div>
        )
    }

    return loggedIn ? <Outlet/> : <Navigate to={'/sign-in'} />
}

export default PrivateRoute