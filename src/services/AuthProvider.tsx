/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fakeAuth } from '../utils/fake'

// eslint-disable-next-line prettier/prettier
export const AuthContext = createContext<{ token: string; onLogout: () => void; onLogin: () => void }>({
  token: '',
  onLogout: () => {},
  onLogin: () => {}
})

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [token, setToken] = useState<string>('')

  const handleLogin = async () => {
    const token = await fakeAuth()

    setToken(token)
    const origin = location.state?.from?.pathname || '/dashboard'
    navigate(origin)
  }

  const handleLogout = () => {
    setToken('')
  }

  const value = useMemo(
    () => ({
      token,
      onLogin: handleLogin,
      onLogout: handleLogout
    }),
    [token, handleLogin, handleLogout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
