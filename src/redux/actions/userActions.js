export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT_PENDING = 'USER_LOGOUT_PENDING'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED'

const BASE_URL = 'http://localhost:3000/api'

export const fetchUser = (id) => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/user/${id}`)
      let user = await response.json()
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: user
      })
    } catch(err) {
      dispatch({
        type: FETCH_USER_FAILED,
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
      localStorage.setItem('userObjectFirstName', userObject.first_name)
      if(userObject.user_type === 'walker'){
        history.push('/walker_index')
      } else {
        history.push('/user_index')
      }
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

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
      localStorage.clear()
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
