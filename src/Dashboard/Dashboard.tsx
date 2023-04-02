import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import RoomDisplayData from './RoomDisplayData'
import RoomGraph from './RoomGraph'

function DashboardContent() {
  return (
    <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
      <RoomDisplayData />
    </Container>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
