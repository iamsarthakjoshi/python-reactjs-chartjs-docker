import {
  FETCH_DATA_GROUP_REQUEST,
  FETCH_DATA_GROUP_SUCCESS,
  FETCH_DATA_GROUP_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  dataGroupList: {
    loading: false,
    error: false,
    successData: []
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_GROUP_REQUEST:
      return Object.assign({}, state, {
        dataGroupList: Object.assign({}, state.dataGroupList, {
          loading: true,
          success: false,
          error: false
        })
      })
    case FETCH_DATA_GROUP_SUCCESS:
      return Object.assign({}, state, {
        dataGroupList: Object.assign({}, state.dataGroupList, {
          loading: false,
          success: true,
          successData: action.payload.data
        })
      })
    case FETCH_DATA_GROUP_FAILED:
      return Object.assign({}, state, {
        dataGroupList: Object.assign({}, state.dataGroupList, {
          loading: false,
          error: true,
          errorData: `Error Occured! ${action.payload}`
        })
      })
    default:
      return state
  }
}
