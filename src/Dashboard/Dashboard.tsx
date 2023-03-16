import React from 'react'
import { AuthContext } from '../services/AuthProvider'
import { useAuth } from '../services/hook'

export default function Dashboard() {
  const { token } = useAuth()

  return (
    <>
      <div>Dashboard</div>
      <div>Authenticated as {token}</div>
    </>
  )
}
