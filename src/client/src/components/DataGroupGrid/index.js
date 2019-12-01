import React, { Component } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { groupBy, map } from 'lodash'

import { fetchDataGroup } from '../../actions'
import BarChart from '../BarChart'

class DataGroupGrid extends Component {
  componentDidMount() {
    this.props.fetchDataGroup()
  }

  render() {
    const {
      data: { dataGroupList }
    } = this.props

    const renderError = dataGroupList.error && (
      <Alert variant="danger">{dataGroupList.errorData}</Alert>
    )

    const dataGroups = groupBy(dataGroupList.successData, 'group')
    const renderCharts = map(dataGroups, (dataGroup, idx) => {
      return (
        <Col lg={4}>
          <BarChart key={idx} dataGroup={dataGroup} />
        </Col>
      )
    })

    return !dataGroupList.loading ? (
      <div className="App">
        <Container>
          <Row>
            {renderError}
            <h3>Data Group</h3>
          </Row>
          <Row>{renderCharts}</Row>
        </Container>
      </div>
    ) : (
      <p>Loading..</p>
    )
  }
}

function mapStateToProps({ data }) {
  return { data }
}

export default connect(mapStateToProps, { fetchDataGroup })(DataGroupGrid)
