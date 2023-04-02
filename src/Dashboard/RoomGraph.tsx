/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { separateData } from '../utils/dataHandling'
import { ResponsiveLine } from '@nivo/line'
import { Chip, Grid, Typography } from '@mui/material'

const chartTheme = {
  textColor: '#FFFFFF',
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: '#777777',
        strokeWidth: 1
      }
    },
    legend: {
      text: {
        fontSize: 12,
        fill: '#FFFFFF'
      }
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 1
      },
      text: {
        fontSize: 11,
        fill: '#FFFFFF'
      }
    }
  },
  grid: {
    line: {
      stroke: '#dddddd',
      strokeWidth: 1
    }
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: '#FFFFFF'
      }
    },
    text: {
      fontSize: 11,
      fill: '#FFFFFF'
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: '#FFFFFF'
      }
    }
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: '#FFFFFF',
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1
    },
    link: {
      stroke: '#000000',
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1
    },
    outline: {
      stroke: '#000000',
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1
    },
    symbol: {
      fill: '#000000',
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1
    }
  },
  tooltip: {
    container: {
      background: '#333333',
      color: '#ffffff',
      fontSize: 12
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {}
  }
}

const val = [
  {
    id: 'japan',
    color: 'hsl(276, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 103
      },
      {
        x: 'others',
        y: 282
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(20, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 86
      },
      {
        x: 'others',
        y: 200
      }
    ]
  }
]

interface RoomGraphProps {
  name: string
  data: { temp: number[]; humidity: number[]; timestamp: number[] }
}

export default function RoomGraph(props: RoomGraphProps) {
  const { data, name } = props
  const { temp, humidity } = separateData(data)

  const val = [
    {
      id: 'Temperature (°C)',
      color: 'hsl(276, 70%, 50%)',
      data: temp
    },
    {
      id: 'Humidité (%)',
      color: 'hsl(20, 70%, 50%)',
      data: humidity
    }
  ]

  return (
    <>
      <Grid maxWidth={0} container spacing={2} direction="column">
        <Grid item>
          <Typography maxWidth={0} variant="subtitle1">
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Chip label={`T: ${temp[temp.length - 1].y} °C`} />
        </Grid>
        <Grid item>
          <Chip label={`H: ${humidity[humidity.length - 1].y} %`} />
        </Grid>
      </Grid>
      <ResponsiveLine
        theme={chartTheme}
        data={val}
        margin={{ top: 8, right: 127, bottom: 20, left: 150 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableSlices="x"
        curve="monotoneX"
        enableGridX={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </>
  )
}
