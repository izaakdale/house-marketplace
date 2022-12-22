import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'

function SignUp() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({email: '', password: '', name: ''})
    const {email, password, name} = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async(e) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = {...formData}
            delete formDataCopy.password 
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        A few details...
                    </p>
                </header>
                <main>
                    <form onSubmit={onSubmit}>
                        <input type="text" className='nameInput' placeholder='name...' id="name" value={name} onChange={onChange}/>
                        <input type="email" className='emailInput' placeholder='email...' id="email" value={email} onChange={onChange}/>
                        <div className="passwordInputDiv">
                            <input className='passwordInput' placeholder='password...' id='password' value={password} type={showPassword? 'text' : 'password' } onChange={onChange}/>
                            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>
                        <div className="signUpBar">
                            <p className="signUpText">
                                Register
                            </p>
                            <button className='signUpButton'>
                                <FaArrowAltCircleRight size={100} fill='#ffffff' width='34px' height='34px'/>
                            </button>
                        </div>
                    </form>

                    {/* Google auth component */}
                    <Link to='/sign-in' className='registerLink'>
                        Already registered?
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default SignUp