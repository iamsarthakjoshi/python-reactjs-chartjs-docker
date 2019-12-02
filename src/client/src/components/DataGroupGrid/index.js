import React, { Component } from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { groupBy, map } from 'lodash'

import { fetchDataGroup } from '../../actions'
import Chart from '../Chart'

class DataGroupGrid extends Component {
  componentDidMount() {
    this.props.fetchDataGroup()
  }

  render() {
    const {
      dataGroupList: { loading, successData, error, errorData }
    } = this.props

    const renderError = error && <Alert variant="danger">{errorData}</Alert>

    const dataGroups = groupBy(successData, 'group')
    const renderCharts = map(dataGroups, (dataGroup, idx) => {
      return (
        <Col lg={4} key={idx}>
          <Chart dataGroup={dataGroup} />
        </Col>
      )
    })

    return !loading ? (
      <>
        <Row>
          {renderError}
          <h3>Data Group</h3>
        </Row>
        <Row>{renderCharts}</Row>
      </>
    ) : (
      <p>Loading..</p>
    )
  }
}

function mapStateToProps({ data: { dataGroupList } }) {
  return { dataGroupList }
}

export default connect(mapStateToProps, { fetchDataGroup })(DataGroupGrid)
