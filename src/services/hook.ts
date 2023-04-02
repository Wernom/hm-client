import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { DataContext } from './DataProvider'
import { RoomContext } from './RoomProvider'

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useDataProvider = () => {
  return useContext(DataContext)
}

export const useRoomProvider = () => {
  return useContext(RoomContext)
}
