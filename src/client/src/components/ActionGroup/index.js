import React, { Component } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

import { createDataGroup, deleteDataGroup } from '../../actions'

import './styles.css'

class ActionGroup extends Component {
  state = { chart_type: 'bar' }
  createDataGroup = () => {
    const { chart_type } = this.state
    this.props.createDataGroup(chart_type)
  }
  deleteDataGroup = () => {
    this.props.deleteDataGroup()
  }
  render() {
    return (
      <Row className="actionGroup">
        <Col lg={3}>
          <Form.Control
            as="select"
            onChange={(e) => this.setState({ chart_type: e.target.value })}
          >
            <option>bar</option>
            <option>pie</option>
            <option>line</option>
          </Form.Control>
        </Col>
        <Col lg={9}>
          <Button variant="primary" onClick={this.createDataGroup}>
            Create
          </Button>
          <Button variant="danger" onClick={this.deleteDataGroup}>
            Delete
          </Button>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps({ data: { dataGroupList } }) {
  return { dataGroupList }
}

export default connect(mapStateToProps, { createDataGroup, deleteDataGroup })(
  ActionGroup
)
