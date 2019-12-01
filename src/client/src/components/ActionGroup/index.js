import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { createDataGroup, deleteDataGroup } from '../../actions'

import './styles.css'

class ActionGroup extends Component {
  createDataGroup = () => {
    this.props.createDataGroup()
  }
  deleteDataGroup = () => {
    this.props.deleteDataGroup()
  }
  render() {
    return (
      <Row className="actionGroup">
        <Col>
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
