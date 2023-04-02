import { createContext, useEffect, useMemo, useState } from 'react'
import { useDataProvider } from './hook'

export const RoomContext = createContext<any[]>([])

export const RoomProvider = ({ children }: any) => {
  const dataProvider = useDataProvider()
  const [data, setData] = useState<any[]>([])

  dataProvider.getAllRoom().then((res) => {
    setData(res.data.data)
  })

  setTimeout(() => {
    dataProvider.getAllRoom().then((res) => {
      setData(res.data.data)
    })
  }, 5 * 60 * 1000)

  const value = useMemo(
    () => ({
      data
    }),
    [data]
  )

  // return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
  return<></>
}
