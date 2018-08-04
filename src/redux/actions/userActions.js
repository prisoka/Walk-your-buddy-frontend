
const BASE_URL = 'http://localhost:3000/api'

export const userSignup = (newUser) => {
  return async (dispatch) => {
    console.log('userSignup')
    // try {
    //   dispatch({type: USER_LOGIN_PENDING})
    //   let response = await fetch(`${BASE_URL}/users`, {
    //     method: "POST",
    //     headers: {'Content-Type':'application/json'},
    //     body: JSON.stringify(newUser)
    //   })
    //   let isSignedUp = await response.json()
    //   dispatch({
    //     type: USER_SIGNUP_SUCCESS,
    //     payload: isSignedUp
    //   })
    // } catch(err) {
    //   dispatch({
    //     type: USER_SIGNUP_FAILED,
    //     payload: err
    //   })
    // }
  }
};
