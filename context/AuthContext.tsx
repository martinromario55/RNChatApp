// create an auth context using firebase on authChange with a user object
import React, { useState, useEffect, createContext } from 'react'

interface AuthProps {
  user?: any
  initializes?: boolean
}

export const AuthContext = createContext<AuthProps>({})

export const AuthProvider = ({ children }: any) => {
  const value = {}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
