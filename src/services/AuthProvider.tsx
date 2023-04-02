/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fakeAuth } from '../utils/fake'
import axios from 'axios'

// eslint-disable-next-line prettier/prettier
export const AuthContext = createContext<{ token: string; onLogout: () => void; onLogin: (cred: any, setOpen: any) => void }>({
  token: '',
  onLogout: () => {},
  onLogin: () => {}
})

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const address = process.env.REACT_APP_BACKEND_ADRESS

  const instance = axios.create({
    baseURL: `${address}/`,
    timeout: 2000
  })

  const [token, setToken] = useState<string>(JSON.parse(localStorage.getItem('token') || '{}'))

  const handleLogin = async (cred: any, setOpen: any) => {
    instance
      .post(`/login`, cred)
      .then((res) => {
        const newToken = res.data
        setToken(newToken.token)
        localStorage.setItem('token', JSON.stringify(newToken.token))
        const origin = location.state?.from?.pathname || '/dashboard'
        navigate(origin)
      })
      .catch((err) => {
        setOpen(true)
      })
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
