import React from 'react'
import { useAuth } from '../services/hook'

export default function Login(): JSX.Element {
  const { onLogin } = useAuth()
  return (
    <>
      <div>Login</div>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  )
}
