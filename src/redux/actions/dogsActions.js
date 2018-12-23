import Swal from 'sweetalert2'

export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS'
export const FETCH_DOGS_FAILED = 'FETCH_DOGS_FAILED'

export const ADD_DOG_PENDING = 'ADD_DOG_PENDING'
export const ADD_DOG_SUCCESS = 'ADD_DOG_SUCCESS'
export const ADD_DOG_FAILED = 'ADD_DOG_FAILED'

const BASE_URL = process.env.REACT_APP_API_URL

export const fetchDogs = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/dogs`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type',
          // headers need Authorization to fetch all dogs
          'Authorization': 'Bearer: ' + window.localStorage.getItem('token')
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
      let formData = new FormData();
      formData.append('dog_name', newDog.dog_name)
      formData.append('dog_age', newDog.dog_age)
      formData.append('dog_size', newDog.dog_size)
      formData.append('dog_photo', newDog.dog_photo)
      // formData.append('dog', newDog)

      let response = await fetch(`${BASE_URL}/dogs`, {
        method: "POST",
        headers: {
          'Access-Control-Request-Headers': 'Authorization, Content-Type',
          // Authorization to add a dog
          'Authorization': 'Bearer: ' + window.localStorage.getItem('token')
        },
        credentials: 'include',
        body: formData
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
      Swal({
        title: "Dog Added",
        type: "success",
        confirmButtonText: "ok"
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
