import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({email: '', password: ''})
    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = () => {

    }

    return (
        <div>
            <div className="page-container">
                <header>
                    <p className="pageHeader">
                        Welcome back!
                    </p>
                </header>
                <main>
                    <form>
                        <input type="email" className='emailInput' placeholder='email...' id="email" value={email} onChange={onChange}/>
                        <div className="passwordInputDiv">
                            <input className='passwordInput' placeholder='password...' id='password' value={password} type={showPassword? 'text' : 'password' } />
                            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>
                        <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password?</Link>
                        <div className="signInBar">
                            <p className="signInText">
                                Sign In
                            </p>
                            <FaArrowAltCircleRight fill='#ffffff' width='34px' className='signInButton'/>
                        </div>
                    </form>

                    {/* Google auth component */}
                    <Link to='/sign-up' className='registerLink'>
                        Sign Up Here...
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default SignIn