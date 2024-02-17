// create an auth context using firebase on authChange with a user object
import { User, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect, createContext } from 'react'
import { FIREBASE_AUTH } from '../config/Firebase.Config'

interface AuthProps {
  user?: any
  initialized?: boolean
}

export const AuthContext = createContext<AuthProps>({})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>()
  const [initialized, setInitialized] = useState<boolean>(false)

  useEffect(() => {
    console.log('AuthProvider')
    onAuthStateChanged(FIREBASE_AUTH, user => {
      console.log('Authenticated:', user && user.email)
      setUser(user)
      setInitialized(true)
    })
  }, [])

  const value = {
    user,
    initialized,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
