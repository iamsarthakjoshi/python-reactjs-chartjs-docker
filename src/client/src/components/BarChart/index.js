import React from 'react'
import { Bar } from 'react-chartjs-2'
import { map } from 'lodash'

export default (props) => {
  const { dataGroup } = props
  const labels = map(dataGroup, (data) => data.date)
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
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }
  return (
    <Bar
      data={data}
      width={100}
      height={100}
      options={{ maintainAspectRatio: false }}
    />
  )
}
