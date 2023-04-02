import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Layout from './Navigation/Layout'
import { AuthProvider } from './services/AuthProvider'
import { DataProvider } from './services/DataProvider'
import { RoomProvider } from './services/RoomProvider'
import { ProtectedRoute } from './services/Route'

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        {/* <Navigation /> */}
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </DataProvider>
    </AuthProvider>
  )
}

export default App
