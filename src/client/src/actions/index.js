import axios from 'axios'
import {
  FETCH_DATA_GROUP_REQUEST,
  FETCH_DATA_GROUP_SUCCESS,
  FETCH_DATA_GROUP_FAILED,
  ADD_DATA_GROUP_REQUEST,
  ADD_DATA_GROUP_SUCCESS,
  ADD_DATA_GROUP_FAILED,
  DELETE_DATA_GROUP_REQUEST,
  DELETE_DATA_GROUP_SUCCESS,
  DELETE_DATA_GROUP_FAILED
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

export const createDataGroup = (chart_type) => {
  return function(dispatch) {
    dispatch({ type: ADD_DATA_GROUP_REQUEST })
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/data`, { chart_type })
      .then((res) => {
        return dispatch({ type: ADD_DATA_GROUP_SUCCESS, payload: res })
      })
      .catch((err) => {
        return dispatch({ type: ADD_DATA_GROUP_FAILED, payload: err })
      })
  }
}

export const deleteDataGroup = () => {
  return function(dispatch) {
    dispatch({ type: DELETE_DATA_GROUP_REQUEST })
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/data`)
      .then((res) => {
        return dispatch({ type: DELETE_DATA_GROUP_SUCCESS, payload: res })
      })
      .catch((err) => {
        return dispatch({ type: DELETE_DATA_GROUP_FAILED, payload: err })
      })
  }
}
