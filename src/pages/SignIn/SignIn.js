import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase/firebase.utils'
import { SignUpForm } from '../../components/SignUpForm/SignUpForm'


export const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>

      <SignUpForm />
    </div>
  )
}
