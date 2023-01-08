import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { toast } from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('email sent!')
    } catch (error) {
      console.log(error);
      toast.error('hmmm...')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input type="email"  id="email" placeholder='email...' className='emailInput' onChange={onChange}/>
        <Link className='forgotPasswordLink' to='/sign-in'>sign-in</Link>

        <div className="signInBar">
          <div className="signInText">Send Reset Link</div>
          <button className='signInButton'>
              <FaArrowAltCircleRight size={100} fill='#ffffff' width='34px' height='34px'/>
          </button>
        </div>
        </form>
      </main>
    </div>
  )

}

export default ForgotPassword