export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS'
export const FETCH_DOGS_FAILED = 'FETCH_DOGS_FAILED'

export const ADD_DOG_PENDING = 'ADD_DOG_PENDING'
export const ADD_DOG_SUCCESS = 'ADD_DOG_SUCCESS'
export const ADD_DOG_FAILED = 'ADD_DOG_FAILED'

const BASE_URL = 'http://localhost:3000/api'

export const fetchDogs = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/dogs`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include',
      })
      let dogs = await response.json()
      dispatch({
        type: FETCH_DOGS_SUCCESS,
        payload: dogs
      })
    } catch(err) {
      dispatch({
        type: FETCH_DOGS_FAILED,
        payload: err
      })
    }
  }
}

export const addDog = (newDog, history) => {
  return async(dispatch) => {
    try {
      dispatch({type: ADD_DOG_PENDING})
      let response = await fetch(`${BASE_URL}/dogs`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include',
        body: JSON.stringify(newDog)
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      let dogObject = await response.json()
      dispatch({
        type: ADD_DOG_SUCCESS,
        payload: dogObject
      })
      history.push('/user_index')
    } catch(err) {
      dispatch({
        type: ADD_DOG_FAILED,
        payload: err
      })
    }
  }
}
