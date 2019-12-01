import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Alert } from 'react-bootstrap'

import './App.css'

function App() {
  const data = {
    labels: [
      'Boston',
      'Worcester',
      'Springfield',
      'Lowell',
      'Cambridge',
      'New Bedford'
    ],
    datasets: [
      {
        label: 'Population',
        data: [617594, 181045, 153060, 106519, 105162, 95072],
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
    <div className="App">
      <h1>App</h1>
      <Bar
        data={data}
        width={25}
        height={25}
        options={{ maintainAspectRatio: false }}
      />

      <Alert variant="primary">This is a alert with</Alert>
    </div>
  )
}

export default App
