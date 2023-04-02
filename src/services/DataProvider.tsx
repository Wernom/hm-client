/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import axios from 'axios'
import { createContext, useMemo } from 'react'
import { useAuth } from './hook'

export const DataContext = createContext<{ getAllRoom: () => Promise<any> }>({
  getAllRoom: async () => {}
})

export const DataProvider = ({ children }: any) => {
  const address = process.env.REACT_APP_BACKEND_ADRESS
  const { token } = useAuth()

  const instance = axios.create({
    baseURL: `${address}/`,
    timeout: 2000,
    headers: { authorization: token }
  })

  const getAllRoom = async () => {
    const res = await instance.get(`/room/all`)
    return res.data.data
  }

  const value = useMemo(
    () => ({
      getAllRoom
    }),
    [getAllRoom]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
