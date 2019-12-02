import React from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2'
import { map, get } from 'lodash'
import moment from 'moment'

export default (props) => {
  const { dataGroup } = props
  const labels = map(dataGroup, (data) =>
    moment(data.date, 'MM/DD/YYYY').format('MMM DD')
  )
  const amount = map(dataGroup, (data) => data.amount)
  const data = {
    labels,
    datasets: [
      {
        label: 'Amount',
        data: amount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }
    ]
  }

  const chart_type = get(dataGroup, '0.chart_type')

  switch (chart_type) {
    case 'pie':
      return (
        <Pie
          data={data}
          width={100}
          height={310}
          options={{ maintainAspectRatio: false }}
        />
      )
    case 'line':
      return (
        <Line
          data={data}
          width={100}
          height={310}
          options={{ maintainAspectRatio: false }}
        />
      )
    case 'bar':
      return (
        <Bar
          data={data}
          width={100}
          height={310}
          options={{ maintainAspectRatio: false }}
        />
      )
    default:
      return <h3>Invalid Chart Type</h3>
  }
}
