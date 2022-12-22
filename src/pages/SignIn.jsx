import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function SignIn() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({email: '', password: ''})
    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {

        try {
            e.preventDefault()

            const auth = getAuth()
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    
            if (userCredentials.user) {
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome back!
                    </p>
                </header>
                <main>
                    <form onSubmit={onSubmit}>
                        <input type="email" className='emailInput' placeholder='email...' id="email" value={email} onChange={onChange}/>
                        <div className="passwordInputDiv">
                            <input className='passwordInput' placeholder='password...' id='password' value={password} type={showPassword? 'text' : 'password' } onChange={onChange}/>
                            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>
                        <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password?</Link>
                        <div className="signInBar">
                            <p className="signInText">
                                Sign In
                            </p>
                            <button className='signInButton'>
                                <FaArrowAltCircleRight size={100} fill='#ffffff' width='34px' height='34px'/>
                            </button>
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