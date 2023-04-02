export const separateData = (data: any): { temp: { x: number; y: number }[]; humidity: { x: number; y: number }[] } => {
  const temp: { x: number; y: number }[] = []
  const humidity: { x: number; y: number }[] = []
  data.forEach((item: any) => {
    temp.push({ x: item.timestamp, y: item.temp })
    humidity.push({ x: item.timestamp, y: item.humidity })
  })

  temp.sort((a, b) => a.x - b.x)
  humidity.sort((a, b) => a.x - b.x)

  return { temp, humidity }
}
