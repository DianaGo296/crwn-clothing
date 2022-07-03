import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase/firebase.utils'

export const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  )
}
