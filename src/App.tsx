import React from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import { AuthProvider } from './services/AuthProvider'
import { useAuth } from './services/hook'
import { ProtectedRoute } from './services/Route'

const App = () => {
  return (
    <AuthProvider>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

const Navigation = () => {
  const { token, onLogout } = useAuth()

  return (
    <nav>
      <NavLink to="/login">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  )
}

export default App
