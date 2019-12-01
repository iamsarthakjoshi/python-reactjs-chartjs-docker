import React from 'react'
import { Container } from 'react-bootstrap'

import DataGroupGrid from './components/DataGroupGrid'
import ActionGroup from './components/ActionGroup'
import './App.css'

export default () => (
  <Container>
    <DataGroupGrid />
    <ActionGroup />
  </Container>
)
