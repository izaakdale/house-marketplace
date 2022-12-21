import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaUser, FaCompass, FaTicketAlt} from 'react-icons/fa'

function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }
    
    return (
        <footer className='navbar'>
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem">
                        <FaCompass onClick={() => navigate('/')} size={30} fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>explore</p>
                    </li>
                    <li className="navbarListItem">
                        <FaTicketAlt onClick={() => navigate('/offers')} size={30} fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>offers</p>
                    </li>
                    <li className="navbarListItem">
                        <FaUser onClick={() => navigate('/profile')} size={30} fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default NavBar