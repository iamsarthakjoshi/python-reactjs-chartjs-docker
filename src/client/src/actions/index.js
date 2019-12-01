import axios from 'axios'
import {
  FETCH_DATA_GROUP_REQUEST,
  FETCH_DATA_GROUP_SUCCESS,
  FETCH_DATA_GROUP_FAILED
} from './types'

export const fetchDataGroup = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_DATA_GROUP_REQUEST })
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/data`)
      .then((res) => {
        return dispatch({ type: FETCH_DATA_GROUP_SUCCESS, payload: res })
      })
      .catch((err) => {
        return dispatch({ type: FETCH_DATA_GROUP_FAILED, payload: err })
      })
  }
}
