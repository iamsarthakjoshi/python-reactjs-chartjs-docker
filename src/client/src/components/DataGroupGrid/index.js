import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
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
      return <BarChart key={idx} dataGroup={dataGroup} />
    })

    return !dataGroupList.loading ? (
      <div className="App">
        {renderError}
        <h3>Data Group</h3>
        {renderCharts}
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
