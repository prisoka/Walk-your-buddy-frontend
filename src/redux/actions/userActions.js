export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const ADD_DOG_PENDING = 'ADD_DOG_PENDING'
export const ADD_DOG_SUCCESS = 'ADD_DOG_SUCCESS'
export const ADD_DOG_FAILED = 'ADD_DOG_FAILED'

export const REQUEST_PENDING = 'REQUEST_PENDING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAILED = 'REQUEST_FAILED'

export const USER_LOGOUT_PENDING = 'USER_LOGOUT'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT'
export const USER_LOGOUT_FAILED = 'USER_LOGOUT'

const BASE_URL = 'http://localhost:3000/api'

export const fetchUsers = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/users`)
      let users = await response.json()
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: users
      })
    } catch(err) {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: err
      })
    }
  }
}

export const userSignup = (newUser, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_SIGNUP_PENDING})
      let response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newUser)
      })
      let userObject = await response.json()
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: userObject
      })
      history.push('/login')
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};

export const userLogin = ({email, password}, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      let userObject = await response.json()
      if(userObject.user_type === 'walker'){
        history.push('/walker_index')
      } else {
        history.push('/user_index')
      }
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response
      })
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

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

export const requestWalk = (newRequest, history) => {
  return async(dispatch) => {
    try {
      dispatch({type: REQUEST_PENDING})
      let response = await fetch(`${BASE_URL}/requests`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include',
        body: JSON.stringify(newRequest)
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      let reqObject = await response.json()
      dispatch({
        type: REQUEST_SUCCESS,
        payload: reqObject
      })
      history.push('/user_index')
    } catch(err) {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      })
    }
  }
}

export const userLogout = (history) => {

  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGOUT_PENDING})

      let response = await fetch(`${BASE_URL}/logout`, {
        method: "GET",
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include'
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })

      dispatch({
        type: USER_LOGOUT_SUCCESS,
      })
      history.push('/')
    } catch(err) {
      dispatch({
        type: USER_LOGOUT_FAILED,
        payload: err
      })
    }
  }
}
