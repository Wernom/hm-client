/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDataProvider } from '../services/hook'
import RoomGraph from './RoomGraph'

export default function RoomDisplayData() {
  const { getAllRoom } = useDataProvider()
  const [roomData, setRoomData] = useState<any[]>()

  useEffect(() => {
    getAllRoom().then((res) => {
      setRoomData(res)
    })
  }, [])

  if (roomData === undefined || roomData.length === 0 || roomData.length === undefined) return <></>

  return (
    <div>
      {roomData.map((room) => (
        <div key={room._id}>
          <Grid container spacing={1}>
            {/* Chart */}
            <Grid item xs={12} md={1} lg={15}>
              <Paper
                elevation={8}
                sx={{
                  p: 2,
                  display: 'flex',
                  height: 220,
                  marginTop: '10px'
                  // backgroundColor: '#0E1317'
                }}
              >
                <RoomGraph data={room.record} name={room._id} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  )
}
